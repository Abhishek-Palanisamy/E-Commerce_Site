import React from 'react'
import '../Assests/CSS/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
  return (
    <>
    <div className='footer-container'>
    <div className='footer-enclosure11'>
    <div className='footer-enclosure'>
    <div className='footer-social_links'>
    <h3 className='headercontact'>Contact Us</h3>
    <h4>AgroFresh</h4>
    <h4>Erode, TamilNadu</h4>
    <h4 >agrofresh@gmail.com</h4>
    <h4 style={{marginTop:'4px'}}>789456130</h4>
    <div className='social_linkss'>
    <FacebookIcon color='inherit' fontSize='small'/>
    <InstagramIcon color='inherit'  fontSize='small'/>
    <TwitterIcon color='inherit' fontSize='small'/>
    </div>
    </div>


    <div className='footer-social_links'>
    <h3 className='headercontact'>Information</h3>
    <a href='#'>About Us</a>
    <a href='#'>Shipping Policy</a>
    <a href='#'>Privacy Policy</a>
    <a href='#'>Terms and Conditions</a>
    </div>
    
    <div className='footer-social_links'>
    <h3 className='headercontact'>Help</h3>
    <a href='#'>Contact Us</a>
    <a href='#'>FAQ</a>
    </div>

    <div className='footer-social_links'>
    <h3 className='headercontact'>Popular Categories</h3>
    
    <a href='#'>Vegetables</a>
    <a href='#'>Fruits</a>
    <a href='#'>Dairy</a>
    <a href='#'>Rice and Wheat</a>
    </div>

    <div className='footer-social_links'>
    <h3 className='headercontact'>Popular Brands</h3>
    <a href='#'>Amul</a>
    <a href='#'>Britannia</a>
    <a href='#'>Parle</a>
    <a href='#'>Cardbury</a>
    <a href='#'>Nestle</a>
    </div>
    </div>
    <div className='footer-links'>
    <a href='#' style={{ color: 'white' }}>FAQ</a><div className='line1'></div>
    <a href='#' style={{ color: 'white' }}>Privacy Policy</a><div className='line1'></div>
    <a href='#' style={{ color: 'white' }}>Terms and Conditions</a><div className='line1'></div>
    <a href='#' style={{ color: 'white' }}>Contact Us</a><div className='line1'></div>
    <a href='#' style={{ color: 'white' }}>About Us</a><div className='line1'></div>
    <a href='#' style={{ color: 'white' }}>Shipping Policy</a>
    </div>
    

    <div className='footer-copyright'>
    <p>AgroFresh <CopyrightIcon style={{fontSize:"smaller",marginTop:'5px'}}/> 2023 - 2025</p>

    </div>
    </div>
    </div>
    </>
  )
}

export default Footer