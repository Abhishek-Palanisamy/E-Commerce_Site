import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import ViewListIcon from '@mui/icons-material/ViewList';
import CopyrightIcon from '@mui/icons-material/Copyright';
import ToggleButton from '@mui/material/ToggleButton';
import '../Assests/CSS/Navbar.css'
import AgroFresh from '../Assests/Images/AgroFresh.png'
import Footer from './Footer';
function Navbar() {
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdowns(!showDropdowns);
  };

  const handleProductsClick = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  return (
    <>
      <nav>
        <div className='nav_container'>
          <div className='nav-header'>
            <ToggleButton
              sx={{ outline: 'none', border: 'none',color:'white' }}
              onClick={handleClick}
            >
              <ViewListIcon />
            </ToggleButton>

            {showDropdowns && (
              <nav className='navigation'>
                <div className="navigation-header">
                  <h1 className="navigation-heading">AgroFresh</h1>
                </div>
                <ul className="navigation-list">
                  <li className="navigation-item">
                    <a href="#" className="navigation-link">
                      Home
                    </a>
                  </li>
                  <li className="navigation-item">
                    <span
                      className="navigation-link"
                      onClick={handleProductsClick} style={{cursor:"pointer"}}
                    >
                      Products
                    </span>
            
                  </li>
                  <li className="navigation-item">
                    <a href="#" className="navigation-link">
                      About Us
                    </a>
                  </li>
                  <li className="navigation-item">
                    <a href="#" className="navigation-link">
                      Contact Us
                    </a>
                  </li>
                  <li className="navigation-item">
                    <a href="#" className="navigation-link">
                      Cart
                    </a>
                  </li>
                  <li className="navigation-item">
                    <a href="#" className="navigation-link">
                      Login
                    </a>
                  </li>
                </ul>
                <p className='copyright-sidebar'>AgroFresh <CopyrightIcon style={{ fontSize: "smaller", marginTop: '5px' }} /> 2023-2025</p>
              </nav>
            )}

            <h1 className='nav-header1'><img src={AgroFresh} style={{height:60,width:180}}/></h1>
            <a href='#' className='nav-header2'>Home</a>
            <a href='#' className='nav-header2'>About Us</a>
            <a href='#' className='nav-header2'>Contact Us</a>
            <a href='#' className='nav-header2'>Cart</a>
            <Avatar src="/broken-image.jpg" sx={{ width: 30, height: 30 ,top:14}} />
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Navbar;
