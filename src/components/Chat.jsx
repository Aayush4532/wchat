import React from "react";
const Chat = () => {
  return (
    <div className="chat-container">
      <div className="search-user">
        <img
          src="https://imgs.search.brave.com/U5bWMIubsglz5j0TDn829p4IxLkFu7DpjyVcsjubWFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tdW0t/b2JqZWN0c3RvcmUu/ZTJlbmV0d29ya3Mu/bmV0L3RyaW5nY29p/bi9zZW9fcG9wdWxh/cl9tYXN0ZXIvMjAy/MzAzMDMxNzU3X1dW/OVFrSGZXU25lQ3Ro/TDguanBn"
          alt=""
        />
        <div>
          <span
            className="name"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Ram
          </span>
          <p
            style={{
              color: "lightgray",
              fontSize: "12px",
            }}
          >
            Hello, How are you
          </p>
        </div>
      </div>
    </div>
  );
};
export default Chat;
