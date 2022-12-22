import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
      } catch (error) {
        toast.error('Could not send password reset email')
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