import { ref } from "firebase/storage";
import {  db} from "./firebase";
import {Link} from 'react-router-dom';
import { deleteDoc} from "firebase/firestore";
import React, { useContext, useState, useEffect,  } from "react";
import { AuthContext } from "../context/AuthContext";
import {  upload } from "./firebase";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

function ProfileCard() {
    let inpName = document.getElementById("username");
    
    const { currentUser } = useContext(AuthContext);
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoUrl, setPhotoURL] = useState("https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png");

    //delete user in firestore
     const deleteUser = async (uid) => {
      const userDoc = doc(db, "users", uid);
      const userChats = doc(db, "userChats", uid);
      await deleteDoc(userDoc, userChats );
      };


    const db = getFirestore();
    let test = currentUser.uid
    const docRef = doc(db, "users", `${test}`);

    const data = {
      displayName: inpName.value
    }
    console.log(currentUser.displayName)

    function update(){
    updateDoc(docRef, data)
    .then(docRef => {
        console.log("Value of an Existing Document Field has been updated");
    })
    .catch(error => {
        console.log(error);
    })
  }

    function handleChange(e) {
      if(e.target.files[0]){
      setPhoto(e.target.files[0])
     }
    }

    function handleClick() {
      upload(photo, currentUser, setLoading);
    }
  

    useEffect(() => {
      if (currentUser && currentUser.photoURL) {
        setPhotoURL(currentUser.photoURL);
      }
    }, [currentUser])

    return (
        <>
          <div className="h-full">
 
 <div className="border-b-2 block md:flex">

   <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
     <div className="flex justify-between">
       <span className="text-xl font-semibold block">User Profile</span>
       <input type="file" onChange={handleChange}/>
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
         <label for="name" className="font-semibold text-gray-700 block pb-1">{currentUser.displayName}</label>
         <div className="flex">
           <input id="username" className="border-1 rounded-r px-4 py-2 w-full" type="text" placeholder={currentUser.displayName}  />
         </div>
       </div>
       <div className="pb-4">
         <label for="about" className="font-semibold text-gray-700 block pb-1">{currentUser.email}</label>
         <input disabled id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" value={currentUser.email}/>
         <span className=" mb-6 text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
         <button className="-mb-4 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800" onClick={update}>Update</button>
       </div>
     </div>
   </div>
 </div>
</div>
<div className="w-full md:w-5/5 p-8 bg-white shadow-md">
     <div className="rounded  shadow p-6">
     <label for="messages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose who can send you a message</label>
        <select id="messages" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Everybody</option>
        <option value="TWO">People following the same courses as you</option>
        <option value="THREE">People who u send first a message to</option>
        </select>
        <br/>
        <label for="messages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your studies</label>
        <select id="studies" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>IT</option>
        <option value="TWO">Management</option>
        <option value="THREE">Marketing</option>
        <option value="FOUR">Art</option>
        <option value="FIVE">Medic</option>
        <option value="SIX">Psychology</option>
        </select>
        <br/>
     
        <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your gender</label>
        <div className="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
</div>
<div className="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
</div>
<div className="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
</div>
<button className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Update</button>
     </div>
   </div>
   <Link to={'/login'}>
   <div>
   <button onClick={() => {deleteUser(test);}} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete Profile</button>
   </div>
   </Link>
        </>
            );}
  export default ProfileCard;
