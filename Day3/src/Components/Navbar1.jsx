import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../redux/features/userSlice';


const Navbar1 = () => {
    const user = useSelector(selectUser);
    const username = user.user && user.user.username ? user.user.username:'Guest';
    const nav=useNavigate('');
    const {carts} = useSelector((state)=>state.allCart);
    const cartpage=()=>{
        nav("/cart")
    }
  return (
    <>
    <Navbar style={{ height: "60px", background: "black", color: "white" }}>
                <Container className='d-flex '>
                <a href='#' className='text-right text-light fs-5 '>Home</a>
                   <h3 className='text-center text-light'>AgroFresh</h3>
                   <div className='container fluid d-flex '>
                   <a href='#' className='text-right text-light fs-5 '>Home</a>
                   <a href='#' className='text-right text-light fs-5 '>About Us</a>
                   <a href='#' className='text-right text-light fs-5 '>Contact Us</a>
                   <a href='#' className='text-right text-light fs-5 '>My Orders</a>
                   <h5>{username}</h5>
                   </div>
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length} onClick={cartpage} style={{cursor:'pointer'}}>
                            <i class="fa-solid fa-cart-shopping"/>
                        </span>
                    </div>
                </Container>
            </Navbar>
    </>
  )
}

export default Navbar1