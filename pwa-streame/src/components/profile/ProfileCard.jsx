import {Link} from 'react-router-dom';
import { deleteDoc} from "firebase/firestore";
import React, { useContext, useState, useEffect,  } from "react";
import { AuthContext } from '../../context/AuthContext'
import { upload } from "../../firebase";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import {getDoc} from "firebase/firestore";



function ProfileCard() {
    const {currentUser} = useContext(AuthContext)
    
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoUrl, setPhotoURL] = useState("https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png");

    const db = getFirestore();
    const test = currentUser.uid
    const docRef = doc(db, "users", `${test}`);
    const uid = currentUser.uid;


    const data = {
      displayName: currentUser.displayName
    }

    function update(){
    updateDoc(docRef, data)
    .then(docRef => {
        console.log("Value of an Existing Document Field has been updated");
    })
    .catch(error => {
        console.log(error);
    })
  }

    function handleClick() {
      upload(photo, currentUser, setLoading);
    }

    function handleUpdate() {
      updateUserDisplayName(test);
      setUsername(username);
    }

  
    useEffect(() => {
      if (currentUser && currentUser.photoURL) {
        setPhotoURL(currentUser.photoURL);
      }
    }, [currentUser])

    //delete user in firestore
  const deleteUser = async (uid) => {
    const userDoc = doc(db, "users", uid);
    const userChats = doc(db, "userChats", uid);
    await deleteDoc(userDoc, userChats );
    };

    function handleChangeFiles(e) {
      if(e.target.files[0]){
      setPhoto(e.target.files[0])
     }
    }
      function handleChangeName(e) {
        setUsername(e.target.value);
        }


      // function handleChangeStudie(e) {
      //   setSelectedValueStudie(e.target.value);
      //  }
      //  function handleChangeGender(e) {
      //   setSelectedValueGender(e.target.value);
      //  }
      //  function handleChangeStatus(e) {
      //   setSelectedValueStatus(e.target.value);
      //  }

    // const [selectedValueStudie, setSelectedValueStudie] = useState();
    // const [selectedValueGender, setSelectedValueGender] = useState();
    // const [selectedValueStatus, setSelectedValueStatus] = useState();
    useEffect(() => {
      const fetchUserData = async () => {
          const userDoc = doc(db, "users", uid);
          const userData = await getDoc(userDoc);
          setSelectedValueStatus(userData.status);
          setSelectedValueStudie(userData.studie);
          setSelectedValueGender(userData.gender);
      }
      fetchUserData();
  }, [currentUser]);
  
    const [selectedValueStatus, setSelectedValueStatus] = useState();
const [selectedValueStudie, setSelectedValueStudie] = useState();
const [selectedValueGender, setSelectedValueGender] = useState();

const handleChangeStatus = (event) => {
  setSelectedValueStatus(event.target.value);
}
const handleChangeStudie = (event) => {
  setSelectedValueStudie(event.target.value);
}
const handleChangeGender = (event) => {
  setSelectedValueGender(event.target.value);
}

    const [username, setUsername] = useState(currentUser.displayName);

      // studie update
      const updateUserStudie = async (uid, role) => {
        const userDoc = doc(db, "users", uid);
        const newFields = { studie: selectedValueStudie};
        await updateDoc(userDoc, newFields);
      };
    // DisplayName update firestore
    const updateUserDisplayName = async (uid, displayname) => {
      const userDoc = doc(db, "users", uid);
      const newFields = { displayName: username};
      await updateDoc(userDoc, newFields);
    };
  
    // update gender
    const updateUserGender = async (uid, gender) => {
      const userDoc = doc(db, "users", uid);
      const newFields = { gender: selectedValueGender};
      await updateDoc(userDoc, newFields);
    };
    // update userstatus
    const updateUserStatus = async (uid, Status) => {
      const userDoc = doc(db, "users", uid);
      const newFields = { status: selectedValueStatus};
      await updateDoc(userDoc, newFields);
    };
  
    function handleUpdate2() {
      const userDoc = doc(db, "users", uid);
      const newFields = { studie: selectedValueStudie, gender: selectedValueGender, status: selectedValueStatus};
      updateDoc(userDoc, newFields);
      setSelectedValueStudie(selectedValueStudie);
      setSelectedValueGender(selectedValueGender);
      setSelectedValueStatus(selectedValueStatus);
    }

  

  console.log(currentUser);
    return (
        <>
          <div className="groen h-full">
 
 <div className="block md:flex">

   <div className="groen w-full md:w-2/5 p-4 sm:p-6 lg:p-8  shadow-md">
     <div className="flex justify-between">
       <span className="text-xl font-semibold block">User Profile</span>
       <input type="file" onChange={handleChangeFiles}/>
       <button className="-mt-2 text-md font-bold text-white bruin rounded-full px-5 py-2 hover:bg-black" disabled={loading || !photo} onClick={handleClick}>Upload</button>
     </div>

     <span className="text-profile">Edit your image</span>
     <div className=" groen w-full p-8 mx-2 flex justify-center">
       <img id="showImage" className="max-w-xs w-32 items-center border" src={photoUrl} alt="Profile image" />                          
       </div>
       <Link to={'/login'}>
   <div className="groen">
   <button onClick={() =>{deleteUser(test);} } className="bruin hover:bg-black text-white font-bold py-2 px-4 rounded">Delete Profile</button>
   </div>
   </Link>
   </div>
   
   <div className="groen w-full md:w-3/5 p-8 lg:ml-4 shadow-md">
     <div className="groen rounded shadow p-6">
       <div className="pb-6">
         <label htmlFor="name" className="font-semibold text-profile block pb-1" >Username</label>
         <div className="flex">
           <input id="username" className="border-1 rounded-r px-4 py-2 w-full border border-brown" type="text"placeholder={currentUser.displayName} value={username} onChange={handleChangeName}/>
         </div>
       </div>
       <div className="groen pb-4">
         <label htmlFor="about" className="font-semibold text-profile block pb-1">Email</label>
         <input disabled id="email" className="border border-brown-300 rounded-r px-4 py-2 w-full" type="email" value={currentUser.email}/>
         <span className=" mb-6 text-profile pt-4 block opacity-70">Personal login in Formation of your account</span>
         <button className="-mb-4 text-md font-bold text-white bruin rounded-full px-5 py-2 hover:bg-black" onClick={handleUpdate}>Update</button>
       </div>
     </div>
   </div>
 </div>
</div>
<div className="groen w-full md:w-5/5 p-8 shadow-md">
     <div className="rounded  shadow p-6">
     <label htmlFor="messages" className="block mb-2 text-sm font-medium text-profile dark:text-white">Choose who can send you a message</label>
     <span>{currentUser.displayName}</span>
        <select id="messages" value={selectedValueStatus} onChange={handleChangeStatus} className="bg-violet-50 border border-brown-300 text-violet-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-violet-700 dark:border-violet-600 dark:placeholder-violet-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="Everybody">Everybody</option>
        <option value="People following the same courses as you">People following the same courses as you</option>
        <option value="People who u send first a message to">People who u send first a message to</option>
        </select>
        <br/>
        <label htmlFor="messages" className="block mb-2 text-sm font-medium text-profile dark:text-white">Choose your studies</label>
        <span>{currentUser.studie}</span>
        <select value={selectedValueStudie} onChange={handleChangeStudie} className="bg-dark border border-brown-300 text-profile text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-violet-700 dark:border-violet-600 dark:placeholder-violet-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="IT">IT</option>
        <option value="Management">Management</option>
        <option value="Marketing">Marketing</option>
        <option value="Art">Art</option>
        <option value="Medic">Medic</option>
        <option value="Psychology">Psychology</option>
        </select>
        <br/>
        <label htmlFor="messages" className="block mb-2 text-sm font-medium text-violet-900 dark:text-white">Choose your gender</label>
        <span>{currentUser.gender}</span>
        <select value={selectedValueGender} onChange={handleChangeGender} className="bg-violet-50 border border-brown-300 text-profile text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-violet-700 dark:border-violet-600 dark:placeholder-violet-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
        </select>
        
        <br/>
<button  onClick={handleUpdate2} className="-mt-2 text-md font-bold text-white bruin rounded-full px-5 py-2 hover:black">Update</button>
     </div>
   </div>
        </>
            );}
  export default ProfileCard;
