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
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner " >
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
    <span className="carousel-control-next-icon"  aria-hidden="true"></span>
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
    Rs. 347(1 Kg) <span className='strike'>Rs. 500</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Cherry} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Cherry<br/>
    Rs. 100(50 g) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Pineapple} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Pineapple<br/>
    Rs. 38(1 Pc) <span className='strike'>Rs. 100</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Apple} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Apple<br/>
    Rs. 177(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Strawberry} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Strawberry<br/>
    Rs. 80(200 g) <span className='strike'>Rs. 120</span>
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
    Rs. 40(1 Kg) <span className='strike'>Rs. 100</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Cauliflower} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Cauliflower<br/>
    Rs. 40(1 Pc) <span className='strike'>Rs. 80</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Cucumber} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Cucumber<br/>
    Rs. 50(200 g) <span className='strike'>Rs. 90</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Spinach} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name text-decoration-none'>Fresho Spinach<br/>
    Rs. 30(400 g) <span className='strike'>Rs. 40</span>
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
<a href='#' className='fruit-name text-decoration-none'>Milk<br/>
Rs. 100(1 L) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Ghee} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Ghee<br/>
Rs. 50(200 g) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src='https://images.pexels.com/photos/3971483/pexels-photo-3971483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Egg<br/>
Rs. 48(12 PC) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Yogurt} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Yogurt<br/>
Rs. 20(1 Cup) <span className='strike'>Rs. 40</span>
</a>
</div>
<div className='fruits_list'>
<img src='https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Country Egg<br/>
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
<img src="https://media.istockphoto.com/id/155284344/photo/sunflower-oil.jpg?s=612x612&w=0&k=20&c=Cr7WLo3oOSNvqUZJoPJ_PHik-l8nBgfwWrMK_DX4EWM=" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Sunflower Oil<br/>
Rs. 100(1 L) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src="https://media.istockphoto.com/id/459128863/photo/peanut-oil.jpg?s=612x612&w=0&k=20&c=kkQeUR6UlkYE310ncrgM8bY1RB01h2MRQsFA-N_nJVc=" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Groundnut Oil<br/>
Rs. 100(1 L) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src="https://media.istockphoto.com/id/965503302/photo/turmeric-powder-and-roots.jpg?s=612x612&w=0&k=20&c=97n0pa3_llc9itGE-nlUJEz5vWwowjA3FF2rNByQmIQ=" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Turmeric Powder<br/>
Rs. 40(200 g) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src="https://media.istockphoto.com/id/1312125865/photo/mortar-and-pestle.jpg?s=612x612&w=0&k=20&c=rE-VeAVzbZ8bOCzZXUN8xpNYDjvDYw8qTy33D6GQ62Y=" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Chilli Powder<br/>
Rs. 10(100 g) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src="https://media.istockphoto.com/id/1177358350/photo/mung-dal-namkeen.jpg?s=612x612&w=0&k=20&c=EUD3tg16ATFPD0U7mNN-aTBraEb_lM8311MgSNa8QIo=" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Moong Dal<br/>
Rs. 80(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
</div>


{/*Beverages*/}
<a href='/descbeve' className='header-main1 text-decoration-none'>
Beverages <KeyboardDoubleArrowRightIcon className='mb-1 fw-bold'/>
</a>
<div className='fruits-container'>
<div className='fruits_list'>
<img src="https://www.plasticexpert.co.uk/wp-content/uploads/2021/02/pexels-karolina-grabowska-4389665-scaled.jpg" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Coca-Cola<br/>
Rs. 45(1 L) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src="https://images.pexels.com/photos/11659356/pexels-photo-11659356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Pepsi<br/>
Rs. 45(1 L) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src="https://media.istockphoto.com/id/459257113/photo/7up-naturally-flavored-caffeine-free-soda-can.jpg?s=612x612&w=0&k=20&c=X-XWKZaXYsd5UD6JqsuW5n1HozeblKumfga8qCXIFYk=" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>7 UP<br/>
Rs. 50(1 L) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src="https://media.istockphoto.com/id/537663261/photo/bottle-of-sprite-drink-on-ice-cubes.jpg?s=612x612&w=0&k=20&c=3iZLsc92Xdss5t8Ikv5TXz98C8K_ZaKeCKcgNZedtrc=" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Sprite<br/>
Rs. 45(1 L) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src="https://images.pexels.com/photos/13950097/pexels-photo-13950097.jpeg?auto=compress&cs=tinysrgb&w=600" style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name text-decoration-none'>Fanta<br/>
Rs. 40(1 L) <span className='strike'>Rs. 240</span>
</a>
</div>
</div>


<h4 className='header-main px-4 text-black mt-5'>
Shop by Brands
</h4>
<div className='fruits-container'>
<div className='fruits_list'>
<img src={Amul} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='/descamul' className='fruit-name text-decoration-none'>Amul<br/>
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