import React, { useRef, useState } from "react"

import { signup, login, logout, useAuth } from "./firebase";

const SignUp = () => {
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();
  
    const emailRef = useRef();
    const passwordRef = useRef();

 
    async function handleSignup() {
        setLoading(true);
        try {
          await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
          alert("Error!");
        }
        setLoading(false);
      }
    
    //logout
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
        Sign up
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
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                    className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                <button onClick={handleSignup} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-purple-600">
                    Sign up
                </button>
            </div>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a
                href="#"
                className="font-medium text-blue-600 hover:underline"
            >
                Sign up
            </a>
        </p>
    </div>
</div>
    
  )
}

export default SignUp

