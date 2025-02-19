import React from "react";
import cam from "../assets/cam.png";
import add from "../assets/add.png";
import more from "../assets/more.png";
import Input from "./Inputfield.jsx";
import Messages from "./Messages.jsx";
const Chats = () => {
  return (
    <div className="chats">
      <div className="user-info">
        <div className="name">
          <img
            src="https://imgs.search.brave.com/U5bWMIubsglz5j0TDn829p4IxLkFu7DpjyVcsjubWFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tdW0t/b2JqZWN0c3RvcmUu/ZTJlbmV0d29ya3Mu/bmV0L3RyaW5nY29p/bi9zZW9fcG9wdWxh/cl9tYXN0ZXIvMjAy/MzAzMDMxNzU3X1dW/OVFrSGZXU25lQ3Ro/TDguanBn"
            alt=""
          />
          <span>Aayush erma</span>
        </div>
        <div className="chat-icon">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <div className="interaction">
        <Messages/>
        <Input />
      </div>
    </div>
  );
};
export default Chats;
