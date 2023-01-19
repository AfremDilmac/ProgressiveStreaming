import React, { useContext } from "react";
import Cam from "../../img/cam.png";
import Add from "../../img/add.png";
import More from "../../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../../context/ChatContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Chat = () => {
  const { data } = useContext(ChatContext);

  function ComingSoon(){
    toast.info('Coming soon! 😅', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img onClick={ComingSoon} src={Cam} alt="" />
          <img onClick={ComingSoon} src={Add} alt="" />
          <img onClick={ComingSoon} src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
  );
};

export default Chat;
