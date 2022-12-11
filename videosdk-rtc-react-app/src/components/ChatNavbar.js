import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from './firebase'
import { AuthContext } from '../context/AuthContext'
import {Link} from 'react-router-dom';

const ChatNavbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">streaMe</span>
      <div className="user">
      <Link to={'/myprofile'}>
      <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        </Link>
      <Link to={'/'}>
        <button onClick={()=>signOut(auth)}>logout</button>
      </Link>
      </div>
    </div>
  )
}

export default ChatNavbar