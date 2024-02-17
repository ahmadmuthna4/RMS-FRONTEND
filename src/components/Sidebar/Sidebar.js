import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { logoutUser } from "../../redux/apiCalls/authApiCall";
import {  useDispatch } from "react-redux";
import { useSelector } from "react-redux";


import './Sidebar.css';
import img1 from '../../assets/logo.png';

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);

  
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <>
      <header className={isMenuOpen ? 'toggle_sidebar' : ''}>
        <div className="user">
          <img src={img1} alt="" className="big" />
          <h3 className="name">RMS</h3>
        </div>
  
        <nav className="navbar">
          <ul>
          <Link to={'/Dashboard'} ><li><a href="#">Dashboard</a></li></Link>
          <Link to={'/AddResearch'} ><li><a href="#">Add Research</a></li></Link>
          <Link to={'/Alerts'} ><li><a href="#">ALL ALERTS</a></li></Link>
          <Link to={`/profile/${user?._id}`} ><li><a href="#">MY PROFILE</a></li></Link>
          <Link to={'/Settings'} ><li><a href="#">SETTINGS</a></li></Link>
          <Link to={'/Report'} ><li><a href="#">REPORT</a></li></Link>
            
            {/* <li><a href="#ALL ALERTS">ALL ALERTS</a></li>
            <li><a href="#MY PROFILE">MY PROFILE</a></li>
            <li><a href="#SETTINGS">SETTINGS</a></li>
            <li><a href="#REPORT">REPORT</a></li> */}
          </ul>
        </nav>
  
        <nav className="navbar">
          <ul>
          <Link to={'/Login'} >
            <li onClick={()=> dispatch(logoutUser())}><a href="#LOGOUT">LOGOUT</a></li>
            </Link>
          </ul>
        </nav>
      </header>
  
      <div id="menu" className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} onClick={handleMenuClick}></div>
    </>
  );
};

export default Sidebar;
