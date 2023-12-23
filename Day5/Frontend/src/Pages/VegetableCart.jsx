import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IconButton } from '@mui/material';
import '../Assests/CSS/Cart.css';
import getVegetableById from './getVegetableById'
import { useParams } from 'react-router-dom';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
const VegetableCart = () => {
  const { id } = useParams();
  const vegetableId = parseInt(id, 10);
  const vegetableDetails = getVegetableById(vegetableId);

  if (!vegetableDetails) {
    return <div>Vegetable not found</div>;
  }


  const [images, setImages] = useState([]);
  const [pincode, setPincode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const allowedPincodes = ['638109', '123456', '789012'];

  
  const checkAvail = () => {
    if (allowedPincodes.includes(pincode)) {
      setErrorMessage({ text: 'Valid Pincode.', color: 'error-message-green' });
    } else {
      setErrorMessage({ text: 'Invalid Pincode.', color: 'error-message-red' });
    }
  };

  useEffect(() => {
    console.log('Images:', images);
    if (vegetableDetails.images && vegetableDetails.images.length > 0) {
      setImages(vegetableDetails.images);
    }
  }, [vegetableDetails]);
  
  const handleClick = (index) => {
    console.log('Clicked index:', index);
    console.log('Images:', images);
    if (images && images.length > 0) {
      setSlide(images[index]);
    }
  };
  
  
  const [slide, setSlide] = useState( images[0]);
 // Set initial value to an empty string or a default image URL
  



  return (
    <>
    <Navbar1/>
      <Container fluid>
        <Row>
          <Col className='cart-header'>
            <a href='#' className='header-bold'>vegetables</a>
            <a href='#' className='header-bold'>Vegetables</a>
            <a href='#' className='header-bold'>Dairy&Poultry</a>
            <a href='#' className='header-bold'>Oils&Foodgrains</a>
            <a href='#' className='header-bold'>Beverages</a>
            <a href='#' className='header-bold'>Snacks</a>
            <a href='#' className='header-bold'>Meat&Fish</a>
            <a href='#' className='header-bold'>Bakery&Cakes</a>
          </Col>
        </Row>

        <Row className='cart-maincontainer'>
          <Col className='cart1-enclosure d-flex '>
            <Row className='cart-enclosure'>
              <Col md={3} className='flex_row'>
              {images.map((data, i) => (
                <div className='thumbnail' key={i}>
                  <img
                    className={slide === data ? "clicked" : ""}
                    src={data}
                    onClick={() => handleClick(i)}
                    height="90px"
                    width="90px"
                  />
                </div>
              ))}
    
              
              </Col>
              <Col md={9}>
                <img src={slide} width="650px" height="550px" />
              </Col>
            </Row>
            
            <Row className='cart-content'>
              <Col className='ml-1'>
                <p className='fresho1 fw-light'>Fresho</p>
                <p className='name'>{vegetableDetails.name}</p>
                <p className='ratings'>
                  <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /> 248
                </p>
                <p className='mrp text-decoration-line-through'>MRP: Rs.200</p>
                <p className='price'>Price: Rs.{vegetableDetails.price}</p>
                <p className='save'>You Save: 5%</p>
                <p className='tax'>(Inclusive of all taxes)</p>
              </Col>
              <Col>
                <div className='cart-icons'>
                  <LocalShippingIcon />
                  <AccountBalanceWalletIcon />
                  <MeetingRoomIcon />
                </div>
                <div className='cart-icons-content'>
                  <p className='cart1-content'>Fast Delivery</p>
                  <p className='cart1-content'>Pay on Cash</p>
                  <p className='cart1-content'>Door Delivery</p>
                </div>
                <div className='avail'>
                  <p>Check Availability :</p>
                  <InputGroup>
                    <Form.Control
                      type='tel'
                      pattern="[678904]{6}"
                      maxLength={6}
                      className='pincode'
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      required
                    />
                    <Button onClick={checkAvail} className=''>
                      <CheckCircleOutlineIcon  />
                    </Button>
                  </InputGroup>
                  <p className={`error-message ${errorMessage.color}`}>{errorMessage.text}</p>
                </div>
              </Col>
              </Row>
          
              </Col>
              </Row>
            <Row className='button-cart'>
            <Col >
            <Button className='btncart1'>Add to Basket <ShoppingBagIcon style={{ fontSize: '20px' }} /></Button>
            </Col>
            <Col>
            <Button className='btncart1'>Buy Now <ShoppingCartCheckoutIcon style={{ fontSize: '20px' }} /></Button>
            </Col>
            </Row>

        <Row className='agrofresh'>
          <Col>
            <p className='whyagro mt-4'>Why AgroFresh?</p>
            <div className='why mx-5'>
              <div className='why1-icons'>
                <AccessTimeIcon style={{ fontSize: '40px', marginLeft: '34%' }} className='why-icons' />
                <br />
                On - Time Delivery<br /><p className='over-night'>Guarantee</p>
              </div>
              <div className='why1-icons'>
                <DeliveryDiningIcon style={{ fontSize: '40px', marginLeft: '34%' }} className='why-icons' /><br />
                Free & Fast Delivery<br /><p className='over-night'>Delivery</p>
              </div>
              <div className='why1-icons'>
                <NightsStayIcon style={{ fontSize: '40px', marginLeft: '37%' }} className='why-icons' /><br />
                Over Night Shipping<br /><p className='over-night'>Assured</p>
              </div>
              <div className='why1-icons'>
                <SupportAgentIcon style={{ fontSize: '40px', marginLeft: '35%' }} className='why-icons' /><br />
                24/7 Customer Support<br /><p className='over-night'>Support</p>
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className='cart-about'><br />Fresho Orange</p>
            <div className="faq">
            <div className="faq">
            <input id="faq-a" type="checkbox" />
            <label htmlFor="faq-a">
              <p className="faq-heading">About the Product</p>
              <div className="faq-arrow" />
              <p className="faq-text">
              Fresho brings you an assortment of 4 imported oranges, 
              which make for an ideal gift during the festive season or even for making desserts and juices. 
              These imported oranges are much bigger in size as compared to the Indian counterpart. 
              You will notice their skin is much brighter and vibrant too. 
              Easy to peel, these oranges are a healthy snack alternative.
              </p>
            </label>
            <input id="faq-b" type="checkbox" />
            <label htmlFor="faq-b">
              <p className="faq-heading">
              Benefits
          
              </p>
              <div className="faq-arrow" />
              <p className="faq-text">
              Oranges are a good source of vitamin C and B complex. 
              They lower cholesterol and control blood sugar level. Oranges contain carotenoids,
               which maintains good eye health and prevents constipation. 
              Orange peels are highly nutritious, fibre-rich and edible. They are believed to be good for skin and nails.
              </p>
            </label>
            <input id="faq-c" type="checkbox" />
            <label htmlFor="faq-c">
              <p className="faq-heading">Storage and Uses</p>
              <div className="faq-arrow" />
              <p className="faq-text">
              Store them in a cool, dry place away from direct sunlight. 
              No pulpy orange canned juice can match the fresh taste of oranges. Bursting with freshly picked juiciness, 
              these are perfect to serve to kids. We also like to toss sections into vegetable salads.
              </p>
            </label>
            </div>         
            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default VegetableCart;
