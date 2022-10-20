import React, { useRef, useState } from "react"
import styles, { layout } from "../style";
import { signup, login, logout, useAuth } from "./firebase";

const SignIn = () => {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();
  
    const emailRef = useRef();
    const passwordRef = useRef();

 
    // async function handleSignup() {
    //     setLoading(true);
    //     try {
    //       await signup(emailRef.current.value, passwordRef.current.value);
    //     } catch {
    //       alert("Error!");
    //     }
    //     setLoading(false);
    //   }

    
      async function handleLogin() {
        setLoading(true);
        try {
          await login(emailRef.current.value, passwordRef.current.value);
          console.log("Je bent ingelogd")
        } catch {
          alert("Error!");
        }
        setLoading(false);
        

      }
    
    // logout
    //   async function handleLogout() {
    //     setLoading(true);
    //     try {
    //       await logout();
    //     } catch {
    //       alert("Error!");
    //     }
    //     setLoading(false);
    //   }

  return (

    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 underline">
        Sign in
     
        </h1>
        <div className="mt-6">
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    ref={emailRef}
                />
                
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    ref={passwordRef}
                />
                
            </div>
                
            <a
                href="#"
                className="text-xs text-gray-600 hover:underline"
            >
                Forget Password?
            </a>
            <div className="mt-6">
                <button onClick={handleLogin} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Sign in
                </button>
            </div>
        </div>
        <div className="absolute z-[2] -left-1/2 top-0 w-[52%] h-[100%] rounded-full white__gradient" />
         <div className="absolute z-[0] w-[35%] h-[50%] -right-[30%] rounded-full white__gradient bottom-40" />

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a
                href="#"
                className="font-medium text-purple-600 hover:underline"
            >
                Sign up
            </a>
        </p>
    </div>
</div>
    
  )
}

export default SignIn

