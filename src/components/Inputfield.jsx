import React from 'react';
import img from "../assets/img.png";
import attach from "../assets/attach.png";
const Inputfield = () => {
  return (
    <div className='input-container'>
      <input type="text" placeholder='Type something..'/>
      <div className="send">
        <input type="file" id='image'style={{display : "none"}}/>
        <label htmlFor="image">
          <img src={img} alt="" />
        </label>
        <input type="file" id='attachments'style={{display : "none"}}/>
        <label htmlFor="attachments">
          <img src={attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
export default Inputfield;