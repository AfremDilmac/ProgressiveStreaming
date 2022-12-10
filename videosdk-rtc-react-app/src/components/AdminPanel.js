import { useState, useEffect, useMemo } from "react";
import {  db} from "./firebase";
import { collection, getDocs, deleteDoc, doc} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewAge] = useState("");

  const [users, setUsers] = useState([]);
  //collectie van users 
  const usersCollectionRef = collection(db, "users");

  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  
  function refreshPage() {
    window.location.reload(false);
  }


//Create user 
    // const handleSubmit = async (e) => {
    //   setLoading(true);
    //   e.preventDefault();
      // const displayName = "default";
      // const email = e.target[1].value;
      // const password = e.target[2].value;
      // const file = e.target[3].files[0];
  
    //   try {
    //     //Create user
    //     const res = await createUserWithEmailAndPassword(auth, email, password);
  
    //     //Create a unique image name
    //     const date = new Date().getTime();
    //     const storageRef = ref(storage, `${displayName + date}`);
  
    //     await uploadBytesResumable(storageRef, file).then(() => {
    //       getDownloadURL(storageRef).then(async (downloadURL) => {
    //         try {
    //           //Update profile
    //           await updateProfile(res.user, {
    //             displayName,
    //             photoURL: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
    //           });
    //           //create user on firestore
    //           await setDoc(doc(db, "users", res.user.uid), {
    //             uid: res.user.uid,
    //             displayName,
    //             email,
    //             photoURL: "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png",
    //           });
  
    //           //create empty user chats on firestore
    //           await setDoc(doc(db, "userChats", res.user.uid), {});
    //         } catch (err) {
    //           console.log(err);
    //           setErr(true);
    //           setLoading(false);
    //         }
    //       });
    //     });
    //   } catch (err) {
    //     setErr(true);
    //     setLoading(false);
    //   }
    // };
    

  //update user in firestore
  // const updateUser = async (id, email) => {
  //   const userDoc = doc(db, "users", id);
  //   const newFields = { email};
  //   await updateDoc(userDoc, newFields);
  // };

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
    //create van user UID
    <div className="App" >
        {/* input displayName */}
    {/* <form onSubmit={handleSubmit}> */}
    
      {/* input email */}
      {/* <input
        placeholder="email..."
        onChange={(event) => {
            setNewAge(event.target.value);
        }}
      /> */}
      {/* input password */}
       {/* <input
        placeholder="password..."
        onChange={(event) => {
            setNewAge(event.target.value);
        }}
      /> */}
      {/* button create user */}
      {/* <input required style={{ display: "none" }} type="file" id="file" />
     <button >Create User</button>
    </form> */}
    
     {/* //Button click Create user in firestore */}


    <div class="">
    <div class="grid grid-cols-4 gap-2 " >
     <h1>DisplayName</h1>
            <h1>Email</h1>
            <h1>Avatar</h1>
     </div>
   
      {users.map((user) => {
        return (
          
          <div class="grid grid-cols-4 gap-2 " >
            {" "}
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
            <h1>{user.photoURL}</h1>
           
            {/* //Button click update user in firestore */}
            {/* <button
              onClick={() => {
                updateUser(user.email)
              }}
            >
              Update User 
            </button> */}


            {/* //Button click delete user in firestore */}
            <button
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default App;
