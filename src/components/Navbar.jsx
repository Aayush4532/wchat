import React from 'react';
const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo-nav'>Aayush Verma</span>
      <div className='user'>
        <img src="https://imgs.search.brave.com/U5bWMIubsglz5j0TDn829p4IxLkFu7DpjyVcsjubWFY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tdW0t/b2JqZWN0c3RvcmUu/ZTJlbmV0d29ya3Mu/bmV0L3RyaW5nY29p/bi9zZW9fcG9wdWxh/cl9tYXN0ZXIvMjAy/MzAzMDMxNzU3X1dW/OVFrSGZXU25lQ3Ro/TDguanBn" alt="" />
        <span>Aayush Verma</span>
        <button>Log Out</button>
      </div>
    </div>
  )
}
export default Navbar;