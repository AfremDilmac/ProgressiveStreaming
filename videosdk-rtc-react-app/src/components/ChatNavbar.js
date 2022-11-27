import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from './firebase'
import { AuthContext } from '../context/AuthContext'

const ChatNavbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">streaMe</span>
      <div className="user">
      <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout </button>
        {/* <Link to="/app"></Link> */}
      </div>
    </div>
  )
}

export default ChatNavbar