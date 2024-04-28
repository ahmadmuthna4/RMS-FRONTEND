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

  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    console.log(index)
  };

  return (
    <>
      <header className={isMenuOpen ? 'toggle_sidebar' : ''}>
        <div className="user">
          <img src={img1} alt="" className="big" />
          <h3 className="name">RMS</h3>
        </div>
  
        
        <nav className="navbar">
            <ul>
              <li><Link to="/" className={activeLink === 0 ? 'active' : ''} onClick={() => handleLinkClick(0)}>Dashboard</Link></li>
              <li><Link to="/AddResearch" className={activeLink === 1 ? 'active' : ''} onClick={() => handleLinkClick(1)}>Add Research</Link></li>
              {/* <li><Link to="/Alerts" className={activeLink === 2 ? 'active' : ''} onClick={() => handleLinkClick(2)}>ALL ALERTS</Link></li> */}
              <li><Link to={`/profile/${user?._id}`} className={activeLink === 3 ? 'active' : ''} onClick={() => handleLinkClick(3)}>MY PROFILE</Link></li>
              <li><Link to="/Settings" className={activeLink === 4 ? 'active' : ''} onClick={() => handleLinkClick(4)}>SETTINGS</Link></li>

              {user?.isAdmin ? 
              <li><Link to="/Report" className={activeLink === 5 ? 'active' : ''} onClick={() => handleLinkClick(5)}>REPORT</Link></li>
               : ''}
              {/* <li><Link to="/Report" className={activeLink === 5 ? 'active' : ''} onClick={() => handleLinkClick(5)}>REPORT</Link></li> */}
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
