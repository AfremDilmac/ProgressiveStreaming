import React from 'react'
import Sidebar from '../components/chat/Sidebar'
import Chat from '../components/chat/Chat'

const ChatApp = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default ChatApp