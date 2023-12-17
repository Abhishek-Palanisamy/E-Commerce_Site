import React, { useState } from 'react'
import '../Assests/CSS/Cart.css'
import Orange1 from '../Assests/Images/orange1_small.jpg';
import Orange2 from '../Assests/Images/orange2-small.jpg';
import Orange3 from '../Assests/Images/orange3-small.jpg';
import Orange4 from '../Assests/Images/orange4-small.jpg';
import Orange5 from '../Assests/Images/orange5-small.jpg';
import Orange6 from '../Assests/Images/orange6-small.jpg';
import Navbar from '../Components/Navbar';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Footer from '../Components/Footer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { IconButton } from '@mui/material';
function OrangeCart() {
  const [pincode, setPincode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const allowedPincodes = ['638109', '123456', '789012'];
  const check_avail=(e)=>{
    if(allowedPincodes.includes(pincode)){
      console.log(pincode);
      setErrorMessage({ text: 'Valid Pincode.', color: 'error-message-green' });
    }
    else {
      console.log('Incorrect Pincode:', pincode);
      setErrorMessage({ text: 'Invalid Pincode.', color:'error-message-red' });
  }
}
  const imgs=[
    {id:0,value:"src/Assests/Images/orange1_small.jpg"},
    {id:1,value:"src/Assests/Images/orange2-small.jpg"},
    {id:2,value:"src/Assests/Images/orange3-small.jpg"},
    {id:3,value:"src/Assests/Images/orange5-small.jpg"},
    {id:4,value:"src/Assests/Images/orange6-small.jpg"},
];
const [slide,setSlide]=useState(imgs[0])
const handleClick=(index)=>{
    console.log(index);
    const slider=imgs[index];
    setSlide(slider);
}
  return (
    <>
    <Navbar/>
    <div className='cart-header'>
    <a href='#' className='header-bold'>Fruits</a>
    <a href='#' className='header-bold'>Vegetables</a>
    <a href='#' className='header-bold'>Dairy&Poultry</a>
    <a href='#' className='header-bold'>Oils&Foodgrains</a>
    <a href='#' className='header-bold'>Beverages</a>
    <a href='#' className='header-bold'>Snacks</a>
    <a href='#' className='header-bold'>Meat&Fish</a>
    <a href='#' className='header-bold'>Bakery&Cakes</a>
    </div>
    <div className='cart-maincontainer'>
    <div className='cart1-enclosure'>
    <div className='cart-enclosure'>



    <div className='flex_row'> 
    {
      imgs.map((data,i)=>
      <div className='thumbnail' key={i}>
      <img className={slide.id==i?"clicked":""} src={data.value} onClick={()=>handleClick(i)} height="90px" width="90px"/>
      </div>
      )
    }
    </div>
    <img src={slide.value} width="650px" height="550px" />





    </div>
    <div className='cart-content'>
    <p className='fresho1'>Fresho</p><br/>
    <p className='name'>Fresho Orange(Loose) - 1 Kg</p><br/>
    <p className='ratings'>    
    <Stack spacing={1}><b>
    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /> 248</b>
  </Stack></p><br/>
    <p className='mrp'>MRP: Rs.200</p>
    <p className='price'>Price: Rs.155</p><br/>
    <p className='save'>You Save: 5%</p>
    <p className='tax'>(Inclusive of all taxes)</p><br/>
    <div className='cart-icons'>
    <LocalShippingIcon/>
    <AccountBalanceWalletIcon/>
    <MeetingRoomIcon/>
    </div>
    <div className='cart-icons-content'>
    <p className='cart1-content'>Fast Delivery</p>
    <p className='cart1-content'>Pay on Cash</p>
    <p className='cart1-content'>Door Delivery</p>
    </div>
    <div className='avail'>
    Check Availability : <input type='tel' pattern="[678904]{6}" maxLength={6} className='pincode' value={pincode}
     onChange={(e)=>setPincode(e.target.value)} required/>
     <IconButton onClick={check_avail}>
    <CheckCircleOutlineIcon style={{marginLeft:'5px',marginBlock:'-10px'}}/>
    </IconButton>
    <p className={`error-message ${errorMessage.color}`}>{errorMessage.text}</p>
    </div>
    </div>
    </div>
    <div className='button-cart'>
    <button className='btncart1'>Add to Basket <ShoppingBagIcon style={{fontSize:'20px'}}/></button>
    <button className='btncart1'>Buy Now  <ShoppingCartCheckoutIcon style={{fontSize:'20px'}}/></button>
    </div>
    <br/><hr/><br/>
    <div className='agrofresh'>
    <p className='whyagro'>Why AgroFresh?</p>
    <div className='why'>
    <div className='why1-icons'>    
    <AccessTimeIcon style={{fontSize:'40px',marginLeft:'34%'}} className='why-icons'/>
    <br/>
    On - Time Delivery<br/><p className='over-night'>Guarantee</p>
    </div>
    <div className='why1-icons'>    
    <DeliveryDiningIcon style={{fontSize:'40px',marginLeft:'34%'}} className='why-icons'/><br/>
    Free & Fast Delivery<br/><p className='over-night'>Delivery</p>
    </div>
    <div className='why1-icons'>    
    <NightsStayIcon style={{fontSize:'40px',marginLeft:'37%'}} className='why-icons'/><br/>
    Over Night Shipping<br/><p className='over-night'>Assured</p>
    </div>
    <div className='why1-icons'>    
    <SupportAgentIcon style={{fontSize:'40px',marginLeft:'35%'}} className='why-icons'/><br/>
    24/7 Customer Support<br/><p className='over-night'>Support</p>
    </div>
    </div>
    </div>
    <hr/>
    <p className='cart-about'><br/>Fresho Orange</p>
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
     these are perfect to serve to kids. We also like to toss sections into fruit salads.
     </p>
   </label>

 </div>
    </div>
    <Footer/>
    </>
  )
}

export default OrangeCart