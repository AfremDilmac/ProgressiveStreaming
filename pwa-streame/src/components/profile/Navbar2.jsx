import {Link, useNavigate} from 'react-router-dom';
import { auth} from "../../firebase";
import { AuthContext } from '../../context/AuthContext'
import React, { useContext, useState, useEffect,  } from "react";
import {signOut} from "firebase/auth"
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import {getDoc} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar2() {
    const {currentUser} = useContext(AuthContext)
    const db = getFirestore();
    const btnAdmin = document.getElementById("btnAdmin");

    async function GoToAdmin(){
    const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.data().role == "admin") {
        console.log("admin");
        navigate('/xclms145df5145sqsdlq')
      } else {
        // doc.data() will be undefined in this case
        toast.error('User is not admin', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }}


        // if (){
        //   toast.warn('U have to be logged in!', {
        //     position: "bottom-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     });
        // }
        const navigate = useNavigate();
        if (currentUser != null){
          navigate('/')
        }


    return (
        <>
        <div className="bruin">
       <nav className="border-gray-200 dark:bg-violet-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
    <Link to={'/'}>
        <p href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">streaME</span>
        </p>
        </Link>
        <Link to={"/chatapp"}>
        <h1 className='text-white'>
            Go to APP
        </h1>
        </Link>
        <button id='btnAdmin' onClick={GoToAdmin} className="rounded-md p-2 ml-5 groen text-brown hover:white">ADMIN PAGE</button>
        <div className="flex items-center">
        <Link to={'/'}>
        <button className="text-sm font-medium text-white dark:text-blue-500 hover:underline" onClick={()=>signOut(auth)}>Logout</button>
      </Link>
        </div>
    </div>
</nav>
<ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
</div>
        </>
    );
}
  
  export default Navbar2;
