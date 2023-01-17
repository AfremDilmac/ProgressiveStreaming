import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext)
  function goHome() {
    navigate('/')
  }

  return (
    <div className='navbar'>
      <Link to="/">
      <span className="logo">StreaME</span>
      </Link>
      <div className="user">
      <Link to="/profile">
        <img src={currentUser.photoURL} alt="" />
        </Link>
        <span>{currentUser.displayName}</span>
        <button onClick={()=> {signOut(auth); goHome()}}>logout</button>
      </div>
    </div>
  )
}

export default Navbar