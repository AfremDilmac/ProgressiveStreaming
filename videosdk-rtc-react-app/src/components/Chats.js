import { doc,onSnapshot } from 'firebase/firestore'
import React, { useContext, useState, useEffect } from "react";
import Kevin from "../assets/people03.png"
import {db} from "../components/firebase";
import { AuthContext } from '../context/AuthContext'

//https://firebase.google.com/docs/firestore/query-data/listen
const Chats = () => {
  const [chats,setChats] = useState([])

  const {currentUser} = useContext(AuthContext)

  useEffect(()=>{
    const getChats = ()=>{
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
    });
  
    return ()=>{
      unsub();
    };
  }; 
      currentUser.uid && getChats()
  }, [currentUser.uid])

  return (
    <div className="chats">
      {Object.entries(chats)?.map((chat) => (
        //key = chat id
       <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Chats