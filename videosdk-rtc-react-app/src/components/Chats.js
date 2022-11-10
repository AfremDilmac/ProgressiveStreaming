import React from 'react'
import Kevin from "../assets/people03.png"

const Chats = () => {
  return (
    <div className="chats">
       <div className="userChat">
          <img src={Kevin} alt="" />
          <div className="userChatInfo">
            <span>Kevin sparkles</span>
          </div>
        </div>
    </div>
  )
}

export default Chats