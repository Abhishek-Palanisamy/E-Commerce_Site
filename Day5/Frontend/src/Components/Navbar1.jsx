import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ToggleButton from '@mui/material/ToggleButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import '../Assests/CSS/Navbar.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../redux/features/userSlice';

const Navbar1 = () => {
    const user = useSelector(selectUser);
    const username = user.user?.username || 'Guest';
    const nav = useNavigate('');
    const { carts } = useSelector((state) => state.allCart);

    const cartpage = () => {
        nav('/cart');
    };

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
         

            {/* Existing Navbar structure */}
            <Navbar style={{ height: '60px', background: 'black', color: 'white' }}>
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
            </nav>
          )}
                <Container className="d-flex ">
                    <h3 className="text-right text-light">AgroFresh</h3>
                    <div className="container fluid d-flex gap-5 justify-content-end">
                  
                        <h5 className="text-light mt-1 me-5 ">{username}!</h5>
                    </div>
                    <div id="ex4">
                        <span
                            className="p1 fa-stack fa-2x has-badge"
                            data-count={carts.length}
                            onClick={cartpage}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className="fa-solid fa-cart-shopping" />
                        </span>
                    </div>
                </Container>
            </Navbar>

            {/* Responsive dropdown menu */}
           
        </>
    );
};

export default Navbar1;
