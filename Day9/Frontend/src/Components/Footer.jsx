import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../Assests/CSS/Footer.css'; 

function Footer() {
  return (
    <>
      <Container fluid className='footer-container text-decoration-none '>
        <Row className='footer-enclosure d-flex '>
          {/* Contact Us */}
          <Col md={3} className='footer-social_links mt-2'>
            <h5 className='headercontact text-decoration-none text-white pt-1'>Contact Us</h5>
            <h6>AgroFresh</h6>
            <h6>Erode, TamilNadu</h6>
            <h6>agrofresh@gmail.com</h6>
            <h6 style={{ marginTop: '4px' }}>789456130</h6>
            <div className='social_linkss pb-1 '>
              <FacebookIcon color='inherit' fontSize='small' />
              <InstagramIcon color='inherit' fontSize='small' />
              <TwitterIcon color='inherit' fontSize='small' />
            </div>
          </Col>

          {/* Information */}
          <Col md={3} className='footer-social_links text-decoration-none mt-2'>
            <h5 className='headercontact  pt-1'>Information</h5>
            <a href='/aboutus' className='text-decoration-none'>About Us</a>
            <a href='/shipping' className='text-decoration-none'>Shipping Policy</a>
            <a href='/privacy' className='text-decoration-none'>Privacy Policy</a>
            <a href='/terms' className='text-decoration-none'>Terms and Conditions</a>
          </Col>

          {/* Help */}
          <Col md={2} className='footer-social_links mt-2'>
            <h5 className='headercontact  pt-1'>Help</h5>
            <a href='/contactus' className='text-decoration-none'>Contact Us</a>
            <a href='/faq' className='text-decoration-none'>FAQ</a>
          </Col>

          {/* Popular Categories */}
          <Col md={2} className='footer-social_links mt-2'>
            <h5 className='headercontact  pt-1'>Popular Categories</h5>
            <a href='/descvege' className='text-decoration-none'>Vegetables</a>
            <a href='/desc' className='text-decoration-none'>Fruits</a>
            <a href='/descpe' className='text-decoration-none'>Dairy Poultry</a>
            <a href='/descof' className='text-decoration-none'>Oils Foodgrains</a>
          </Col>

          {/* Popular Brands */}
          <Col md={2} className='footer-social_links pb-2 mt-2'>
            <h5 className='headercontact  pt-1'>Popular Brands</h5>
            <a href='/descamul' className='fn text-decoration-none'>Amul</a>
            <a href='#' className='fn text-decoration-none'>Britannia</a>
            <a href='#' className='fn text-decoration-none'>Parle</a>
            <a href='#' className='fn text-decoration-none'>Cardbury</a>
            <a href='#' className='fn text-decoration-none'>Nestle</a>
          </Col>
        </Row>

        {/* Additional Links */}
        <Row className='footer-links d-flex justify-content-between'>
          <Col md={2}><a href='/faq' className='text-decoration-none text-white'>FAQ</a></Col>
          <Col md={2}><a href='/privacy' className='text-decoration-none text-white'>Privacy Policy</a></Col>
          <Col md={2}><a href='/terms' className='text-decoration-none text-white'>Terms and Conditions</a></Col>
          <Col md={2}><a href='/contactus' className='text-decoration-none text-white'>Contact Us</a></Col>
          <Col md={2}><a href='/aboutus' className='text-decoration-none text-white'>About Us</a></Col>
          <Col md={2}><a href='/shipping' className='text-decoration-none text-white'>Shipping Policy</a></Col>
        </Row>

        {/* Copyright */}
        <Row className='mb-0'>
            <p className='fs-smaller mt-1 text-center fw-bold' style={{fontSize:'12px'}}>Copyright Reserved @ AgroFresh 2023 - 2025</p>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
