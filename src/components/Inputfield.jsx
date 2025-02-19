import React, { useState } from 'react';
import img from "../assets/img.png";
import attach from "../assets/attach.png";
import { useSocket } from '../context/SocketContext';

const Inputfield = () => {
  const [text, setText] = useState('');
  const socket = useSocket();

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const messageData = {
      text,
      sender: 'me',
      timestamp: new Date().getTime(),
    };

    // Emit the message to the server
    socket.emit('send_message', messageData);
    setText('');
  };

  return (
    <div className='input-container'>
      <form className="input" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="send">
          <input type="file" id='image'style={{display : "none"}}/>
          <label htmlFor="image">
            <img src={img} alt="" />
          </label>
          <input type="file" id='attachments'style={{display : "none"}}/>
          <label htmlFor="attachments">
            <img src={attach} alt="" />
          </label>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}
export default Inputfield;