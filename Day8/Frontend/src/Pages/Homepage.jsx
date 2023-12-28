import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Orange from '../Assests/Images/orange_fruits.jpg';
import Cherry from '../Assests/Images/cherry_fruits.jpg';
import Apple from '../Assests/Images/apple_fruits.jpg';
import Pineapple from '../Assests/Images/pineapple_fruits.jpg';
import Strawberry from '../Assests/Images/strawberry_fruits.jpg';
import Cauliflower from '../Assests/Images/cauliflower_vegetable.jpg';
import Cucumber from '../Assests/Images/cucumber_vegetable.jpg';
import Potato from '../Assests/Images/potato_vegetable.jpg';
import Tomato from '../Assests/Images/tomato_vegetables.jpg';
import Spinach from '../Assests/Images/spinach_vegetable.jpg';
import Milk from '../Assests/Images/milk_dairy.jpg';
import Ghee from '../Assests/Images/ghee_dairy.jpg';
import Yogurt from '../Assests/Images/yogurt_dairy.jpg';
import Cheese from '../Assests/Images/cheese_dairy.jpg';
import Deals from '../Assests/Images/deals_banner.jpg';
import Amul from '../Assests/Images/amul_brands.webp';
import Nestle from '../Assests/Images/nestle_brand.png';
import Parle from '../Assests/Images/parle_brand.png';
import Britannia from '../Assests/Images/britannia_brand.png';
import Cardbury from '../Assests/Images/cardbury_brand.png';
import '../Assests/CSS/styles.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
function HomePage({data}) {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };
  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };
  const autoSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };
  useEffect(() => {
    const intervalId = setInterval(autoSlide, 4000); 
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
    <Navbar1/>
    <div className='main_container2 container-fluid'>

    <img src='https://cdn.shopify.com/s/files/1/0430/8700/3813/files/Banner2_1200x.jpg?v=1614759347' className='container-sm sm' />
    
{/*Image Slider*/}
<div id="carouselExampleIndicators" className="carousel slide" >
  <div className="carousel-indicators ms-2">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner " style={{width:'88%', marginLeft:'-12%'}}>
    <div className="carousel-item active ">
      <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1703160605_Bindaas_Biscuiting_1680x320.jpg?im=Resize=(1680,320)" class="d-block w-100 h-89" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1703277988_Party_Must_Haves.jpg?im=Resize=(1680,320)" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1702488688_Bindaas_Biscuiting_Desktop.jpg?im=Resize=(1680,320)" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1702403458_Super_Saver_Deals_On_Cooking_Oil__Desktop.jpg?im=Resize=(1680,320)" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon me-5" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" style={{marginRight:'90%'}} aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

{/*Categories*/}
    <div className='homepage_container'>
    <div className='homepage_container-enclosure'>
    <h4 className='header-main text-black mt-5 px-4'>
    Shop by Categories 
    </h4>

{/*Fruits*/}
    <a href='/desc' className='header-main1 text-decoration-none'>
    Fruits <KeyboardDoubleArrowRightIcon className='mb-1 fw-bold'/>
    </a>
    <div className='fruits-container text-decoration-none'>
    <div className='fruits_list '>
    <img src={Orange} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Orange<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Cherry} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Cherry<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Pineapple} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Pineapple<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Apple} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Apple<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Strawberry} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Strawberry<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    </div>

{/*Vegetables*/}
    <a href='/descvege' className='header-main1 text-decoration-none'>
    Vegetables <KeyboardDoubleArrowRightIcon className='mb-1 fw-bold'/>
    </a>
    <div className='fruits-container'>
    <div className='fruits_list'>
    <img src={Tomato} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Tomato<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Cauliflower} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Cauliflower<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Cucumber} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Cucumber<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Spinach} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Spinach<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Potato} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Potato<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    </div>

{/*Dairy*/}
<a href='/descpe' className='header-main1 text-decoration-none'>
Dairy and Poultry <KeyboardDoubleArrowRightIcon className='mb-1 fw-bold'/>
</a>
<div className='fruits-container'>
<div className='fruits_list'>
<img src={Milk} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Fresho Milk<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Ghee} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Fresho Ghee<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src='https://images.pexels.com/photos/3971483/pexels-photo-3971483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Egg<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Yogurt} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Fresho Yogurt<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src='https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Fresho Country Egg<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
</div>



{/*Oils Foodgrains*/}
<a href='/descof' className='header-main1 text-decoration-none'>
Oils Foodgrains <KeyboardDoubleArrowRightIcon className='mb-1 fw-bold'/>
</a>
<div className='fruits-container'>
<div className='fruits_list'>
<img src={Milk} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Fresho Milk<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Ghee} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Fresho Ghee<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src='https://images.pexels.com/photos/3971483/pexels-photo-3971483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Egg<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Yogurt} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Fresho Yogurt<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src='https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Fresho Country Egg<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
</div>
<h4 className='header-main px-4 text-black mt-5'>
Shop by Brands
</h4>
<div className='fruits-container'>
<div className='fruits_list'>
<img src={Amul} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Amul<br/>
</a>
</div>
<div className='fruits_list'>
<img src={Nestle} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Nestle<br/>
</a>
</div>
<div className='fruits_list'>
<img src={Britannia} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Britannia<br/>
</a>
</div>
<div className='fruits_list'>
<img src={Parle} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Parle<br/>
</a>
</div>
<div className='fruits_list'>
<img src={Cardbury} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Cardbury
</a>
</div>
</div>




</div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage