import React, { useEffect, useState } from 'react';
import { useSocket } from '../context/SocketContext';
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const socket = useSocket();

  useEffect(() => {
    if (!socket) return;

    // Listen for incoming messages
    socket.on('receive_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, [socket]);

  return (
    <div className="messages">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender === 'me' ? 'owner' : ''}`}>
          <div className="messageContent">
            <p>{message.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Messages;