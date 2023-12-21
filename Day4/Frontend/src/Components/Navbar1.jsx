import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
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

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('show');
    };



    

    return (
        <>
            {/* Existing Navbar structure */}
            <Navbar style={{ height: '60px', background: 'black', color: 'white' }}>
                <Container className="d-flex ">
                    <h3 className="text-right text-light">AgroFresh</h3>
                    <div className="container fluid d-flex gap-5 justify-content-end">
                    <a href='/' className='text-right text-decoration-none text-light fs-5 '>Home</a>
                   <a href='/profile' className='text-right text-decoration-none text-light fs-5 '>Profile</a>
                   <a href='/myorders' className='text-right text-decoration-none text-light fs-5 '>My Orders</a>
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
