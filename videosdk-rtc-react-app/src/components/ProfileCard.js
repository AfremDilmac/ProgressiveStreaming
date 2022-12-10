import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfileCard() {

    const { currentUser } = useContext(AuthContext);
    console.log(currentUser.displayName);
    console.log(currentUser.email);
    console.log(currentUser.photoURL);
  
    return (
        <>
          <div class="h-full">
 
 <div class="border-b-2 block md:flex">

   <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
     <div class="flex justify-between">
       <span class="text-xl font-semibold block">User Profile</span>
       <a href="#" class="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</a>
     </div>

     <span class="text-gray-600">Edit your image</span>
     <div class="w-full p-8 mx-2 flex justify-center">
       <img id="showImage" class="max-w-xs w-32 items-center border" src={currentUser.photoURL} alt="Profile image" />                          
       </div>
   </div>
   
   <div class="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
     <div class="rounded  shadow p-6">
       <div class="pb-6">
         <label for="name" class="font-semibold text-gray-700 block pb-1">{currentUser.displayName}</label>
         <div class="flex">
           <input disabled id="username" class="border-1  rounded-r px-4 py-2 w-full" type="text" value={currentUser.displayName} />
         </div>
       </div>
       <div class="pb-4">
         <label for="about" class="font-semibold text-gray-700 block pb-1">{currentUser.email}</label>
         <input disabled id="email" class="border-1  rounded-r px-4 py-2 w-full" type="email" value={currentUser.email}/>
         <span class="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>
       </div>
     </div>
   </div>
 </div>
</div>
<div class="w-full md:w-5/5 p-8 bg-white shadow-md">
     <div class="rounded  shadow p-6">
     <label for="messages" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose who can send you a message</label>
        <select id="messages" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Everybody</option>
        <option value="TWO">People following the same courses as you</option>
        <option value="THREE">People who u send first a message to</option>
        </select>
     
        <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose your gender</label>
        <div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
</div>
<div class="flex items-center">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
</div>
<div class="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
</div>
     </div>
   </div>
        </>
    );
}
  
  export default ProfileCard;
