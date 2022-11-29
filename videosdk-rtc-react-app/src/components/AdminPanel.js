import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Add from "../assets/addAvatar.png"
import { useState, useEffect } from "react";
import { auth, db, storage} from "./firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, setDoc} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function App() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewAge] = useState("");

  const [users, setUsers] = useState([]);
  //collectie van users 
  const usersCollectionRef = collection(db, "users");

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  
//Create user 
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };
    

  //update user in firestore
  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  //delete user in firestore
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);



  return (
    <div className="App">
        {/* input displayName */}
    <form onSubmit={handleSubmit}>
        <input
        placeholder="display name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />
      {/* input email */}
      <input
        placeholder="email..."
        onChange={(event) => {
            setNewAge(event.target.value);
        }}
      />
      {/* input password */}
       <input
        placeholder="password..."
        onChange={(event) => {
            setNewAge(event.target.value);
        }}
      />
      {/* button create user */}
     <button disabled={loading}>Create User</button>
        {/* input avatar  */}
       <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
          </label>

          {/* Loading after pressing "Create user" */}
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}

    </form>
     
     {/* //Button click Create user in firestore */}
      {users.map((user) => {
        return (
          <div>
            {" "}
         
            <h1>DisplayName: {user.displayName}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Avatar: {user.photoURL}</h1>
           
            {/* //Button click update user in firestore */}
            <button
              onClick={() => {
                updateUser(user.displayName, user.email, user.photoURL);
              }}
            >
             {" "}
              Update User 
            </button>


            {/* //Button click delete user in firestore */}
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              {" "}
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
