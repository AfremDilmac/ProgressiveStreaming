import React from 'react'
import Anthony from "../assets/people01.png"
import Afrem from "../assets/people02.png"

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Afrem} alt="img"></img>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello!</p>
        {/* <img src={Anthony} alt="img"></img> */}
      </div>
    </div>
  )
}

export default Message