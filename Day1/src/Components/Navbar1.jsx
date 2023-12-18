import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Navbar1 = () => {
    const nav=useNavigate('');
    const {carts} = useSelector((state)=>state.allCart);
    const cartpage=()=>{
        nav("/cart")
    }
  return (
    <>
    <Navbar style={{ height: "60px", background: "black", color: "white" }}>
                <Container className='d-flex '>
                   <h3 className='text-center text-light'>AgroFresh</h3>
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