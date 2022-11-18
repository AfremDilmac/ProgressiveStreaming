import React, { useContext } from "react";
import Cam from "../assets/cam.png"
import Add from "../assets/add.png"
import More from "../assets/more.png"
import Messages from "./Messages"
import Input from "./Input"
import { ChatContext } from '../context/ChatContext'


const Chat = () => {
  const {data} = useContext(ChatContext)
  return (
    <div className="chat">
      <div className="chatInfo">
        {/* //if there is a user display name */}
        <span>{data.user?.displayName}</span>
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