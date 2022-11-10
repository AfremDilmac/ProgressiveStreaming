import React from 'react'
import Cam from "../assets/cam.png"
import Add from "../assets/add.png"
import More from "../assets/more.png"
import Messages from "./Messages"
import Input from "./Input"


const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Anthonio</span>
        <div className="chatIcons">
          <img src={Cam} alt =""></img>
          <img src={Add} alt =""></img>
          <img src={More} alt =""></img>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat