import React from 'react'
import Afrem from "../assets/people02.png"


const ChatNavbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">streaMe</span>
      <div className="user">
        <img src={Afrem} alt="" />
        <span>Afrem</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default ChatNavbar