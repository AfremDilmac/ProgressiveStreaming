import React from 'react'
import Add from "../assets/addAvatar.png"

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">StreaME</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder="email"></input>
                <input type="password" placeholder="password"></input>
                <button>Sign in</button>
            </form>
            <p>You do have an account? Register</p>
        </div>
    </div>
  )
}

export default Login