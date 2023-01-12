import {Link} from 'react-router-dom';
import { deleteDoc} from "firebase/firestore";
import React, { useContext, useState, useEffect,  } from "react";
import { AuthContext } from '../../context/AuthContext'
import {  upload } from "../../firebase";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

function ProfileCard() {
    const {currentUser} = useContext(AuthContext)
    
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoUrl, setPhotoURL] = useState("https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png");


    const db = getFirestore();
    const test = currentUser.uid
    const docRef = doc(db, "users", `${test}`);

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

      function handleChangeStudie(e) {
        setSelectedValueStudie(e.target.value);
       }
       function handleChangeGender(e) {
        setSelectedValueGender(e.target.value);
       }
       function handleChangeStatus(e) {
        setSelectedValueStatus(e.target.value);
       }

    const [selectedValueStudie, setSelectedValueStudie] = useState('IT');
    const [selectedValueGender, setSelectedValueGender] = useState('Male');
    const [selectedValueStatus, setSelectedValueStatus] = useState('IT');
    const [username, setUsername] = useState(currentUser.displayName);

      // studie update
      const updateUserStudie = async (uid, role) => {
        const userDoc = doc(db, "users", uid);
        const newFields = { studie: selectedValueStudie};
        await updateDoc(userDoc, newFields);
      };
    // DisplayName update
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
  

    function handleUpdate() {
      updateUserDisplayName(test);
  }
 
    function handleUpdate2() {
      updateUserStudie(test);
      updateUserGender(test);
      updateUserStatus(test);
    }
  
    return (
        <>
          <div className="h-full">
 
 <div className="border-b-2 block md:flex">

   <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
     <div className="flex justify-between">
       <span className="text-xl font-semibold block">User Profile</span>
       <input type="file" onChange={handleChangeFiles}/>
       <button className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800" disabled={loading || !photo} onClick={handleClick}>Upload</button>
     </div>

     <span className="text-gray-600">Edit your image</span>
     <div className="w-full p-8 mx-2 flex justify-center">
       <img id="showImage" className="max-w-xs w-32 items-center border" src={photoUrl} alt="Profile image" />                          
       </div>
   </div>
   
   <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
     <div className="rounded  shadow p-6">
       <div className="pb-6">
         <label htmlFor="name" className="font-semibold text-gray-700 block pb-1" >Username</label>
         <div className="flex">
           <input id="username" className="border-1 rounded-r px-4 py-2 w-full" type="text"placeholder={currentUser.displayName} value={username} onChange={handleChangeName}/>
         </div>
       </div>
       <div className="pb-4">
         <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Email</label>
         <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" value={currentUser.email}/>
         <span className=" mb-6 text-gray-600 pt-4 block opacity-70">Personal login in Formation of your account</span>
         <button className="-mb-4 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800" onClick={handleUpdate}>Update</button>
       </div>
     </div>
   </div>
 </div>
</div>
<div className="w-full md:w-5/5 p-8 bg-white shadow-md">
     <div className="rounded  shadow p-6">
     <label htmlFor="messages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose who can send you a message</label>
        <select id="messages" value={selectedValueStatus} onChange={handleChangeStatus} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="Everybody">Everybody</option>
        <option value="People following the same courses as you">People following the same courses as you</option>
        <option value="People who u send first a message to">People who u send first a message to</option>
        </select>
        <br/>
        <label htmlFor="messages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your studies</label>
        <select value={selectedValueStudie} onChange={handleChangeStudie} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="IT">IT</option>
        <option value="Management">Management</option>
        <option value="Marketing">Marketing</option>
        <option value="Art">Art</option>
        <option value="Medic">Medic</option>
        <option value="Psychology">Psychology</option>
        </select>
        <br/>
        <label htmlFor="messages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your gender</label>
        <select value={selectedValueGender} onChange={handleChangeGender} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
        </select>
        
        <br/>
<button  onClick={handleUpdate2} className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Update</button>
     </div>
   </div>
   <Link to={'/login'}>
   <div>
   <button onClick={() =>{deleteUser(test);} } className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete Profile</button>
   </div>
   </Link>
        </>
            );}
  export default ProfileCard;
