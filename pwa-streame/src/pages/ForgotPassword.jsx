import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const ForgotPassword = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  
    const onChange = (e) => setEmail(e.target.value)
    
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
      } catch (error) {
       console.log(error);
      }
    }
  
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">StreaME</span>
          <span className="title">Login</span>
          <form onSubmit={onSubmit}>
          <input 
          type="email"
          placeholder="email"
          id='email'
          value={email}
          onChange={onChange} />
          <button>Send Reset Link</button>
          </form>
          <p>You don't have an account? <Link to="/register">Register</Link></p>
          <p>Go back? <Link to="/login">Login</Link></p>
        </div>
      </div>
    );
  };
  
  export default ForgotPassword;