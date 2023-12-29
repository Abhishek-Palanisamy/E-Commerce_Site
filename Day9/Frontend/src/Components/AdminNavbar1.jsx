import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ToggleButton from '@mui/material/ToggleButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import '../Assests/CSS/Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, selectUser } from '../redux/features/userSlice';

const AdminNavbar1 = () => {
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
    const dispatch=useDispatch();
    const logouthandler=()=>{
      dispatch(logout())
      alert("Logout Successfully!")
      localStorage.removeItem('token'); 
      localStorage.removeItem('reduxState'); 
      localStorage.removeItem('productNames');
      localStorage.removeItem('totalprice');
      nav("/log")
    }

    

    return (
        <>
         

            {/* Existing Navbar structure */}
            <Navbar style={{ height: '60px', background: 'black', color: 'white' }}>
            <ToggleButton  className='togglebtn'
            sx={{ outline: 'none', border: 'none',color:'white' , marginLeft:'-27%'}}
            onClick={handleClick}
          >
            <ViewListIcon />
          </ToggleButton>

          {showDropdowns && (
            <nav className='navigation'>
              <div className="navigation-header">
                <h1 className="navigation-heading ">AgroFresh</h1>
              </div>
              <ul className="navigation-list">
                <li className="navigation-item">
                  <a href="/registertable" className="navigation-link fs-6">
                    Users List
                  </a>
                </li>
                <li className="navigation-item">
                  <a href="/contactustable" className="navigation-link fs-6">
                    Contact List
                  </a>
                </li>
      
           
             
             
                <li className="navigation-item">
                  <a href="/carttable" className="navigation-link fs-6">
                    Order List
                  </a>
                </li>
                <li className="navigation-item">
                {user.user && user.user.username ?(
                   <p onClick={logouthandler} style={{cursor:"pointer"}}  className="navigation-link fs-6">
                    Logout
                  </p>
                ):(<Link
                  to="/log"
                  className={`nav-links ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                  onClick={handleClick}
                >
                <p className='navigation-link'>Login</p>
                </Link>
                )}
                </li>
              </ul>
            </nav>
          )}
                <Container className=" container fluid ">
                    <h3 className=" text-light ms-5">AgroFresh</h3>
                    <div className="container fluid d-flex justify-content-end">
                  
                        <h5 className="text-light mt-1 me-5 ">Welcome  {username}!</h5>
                    </div>
            
                </Container>
            </Navbar>

           
        </>
    );
};

export default AdminNavbar1;
