import React from 'react';
import { Link } from 'react-router';
import logo from "./../assets/ah.png"
import "./Navbar.css"
const Navbar = () => {
  const fileId = '19FE4FSfIpnyqUjU6nRK8xUDO2PiXT71b';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.download = 'document.pdf'; 
    link.click();
  };
    const links=<>
        <Link className='mr-3 mt-1' to='/'>Home</Link>
        <li><a href='#about'>About</a></li>
        <li><a href='#skill'>Skills</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contacts'>Contacts</a></li>
    </>
    return (

<div  className="navbar sticky top-0 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
   <img className='ml-30 lg:ml-10 w-10' src={logo} alt="ariful haque" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <button onClick={handleDownload} className="btn mr-10">Resume</button>
  </div>
</div>
    );
};

export default Navbar;