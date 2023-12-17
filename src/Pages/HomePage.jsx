import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Navbar from '../Components/Navbar';
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
import Butter from '../Assests/Images/butter_dairy.webp';
import Ghee from '../Assests/Images/ghee_dairy.jpg';
import Yogurt from '../Assests/Images/yogurt_dairy.jpg';
import Cheese from '../Assests/Images/cheese_dairy.jpg';
import Deals from '../Assests/Images/deals_banner.jpg';
import Amul from '../Assests/Images/amul_brands.webp';
import Nestle from '../Assests/Images/nestle_brand.png';
import Parle from '../Assests/Images/parle_brand.png';
import Britannia from '../Assests/Images/britannia_brand.png';
import Cardbury from '../Assests/Images/cardbury_brand.png';
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
    <Navbar/>
    <div className='main_container2'>

    <img src={Deals} style={{marginLeft:"5%",height:"300px",width:"1350px",marginTop:"2px"}}/>
{/*Image Slider*/}
    <div className="carousel">
    <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
    {data.map((item, idx) => {
      return (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
        />
      );
    })}
    <BsArrowRightCircleFill
      onClick={nextSlide}
      className="arrow arrow-right"
    />
    <span className="indicators">
      {data.map((_, idx) => {
        return (
          <button
            key={idx}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}
          ></button>
        );
      })}
    </span>
  </div>

{/*Categories*/}
    <div className='homepage_container'>
    <div className='homepage_container-enclosure'>
    <h2 className='header-main'>
    Shop by Categories 
    </h2>

{/*Fruits*/}
    <a href='#' className='header-main1'>
    Fruits
    </a>
    <div className='fruits-container'>
    <div className='fruits_list'>
    <img src={Orange} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Orange<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Cherry} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Cherry<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Pineapple} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Pineapple<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Apple} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Apple<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Strawberry} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Strawberry<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    </div>

{/*Vegetables*/}
    <a href='#' className='header-main1'>
    Vegetables
    </a>
    <div className='fruits-container'>
    <div className='fruits_list'>
    <img src={Tomato} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Tomato<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Cauliflower} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Cauliflower<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Cucumber} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Cucumber<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Spinach} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Spinach<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    <div className='fruits_list'>
    <img src={Potato} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <a href='#' className='fruit-name'>Fresho Potato<br/>
    Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
    </a>
    </div>
    </div>

{/*Dairy*/}
<a href='#' className='header-main1'>
Dairy
</a>
<div className='fruits-container'>
<div className='fruits_list'>
<img src={Milk} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Fresho Milk<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Ghee} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Fresho Ghee<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Butter} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Fresho Butter<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Yogurt} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Fresho Yogurt<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
<div className='fruits_list'>
<img src={Cheese} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Fresho Cheese<br/>
Rs. 100(1 Kg) <span className='strike'>Rs. 240</span>
</a>
</div>
</div>
<h2 className='header-main'>
Shop by Brands
</h2>
<div className='fruits-container'>
<div className='fruits_list'>
<img src={Amul} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Amul<br/>
</a>
</div>
<div className='fruits_list'>
<img src={Nestle} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Nestle<br/>
</a>
</div>
<div className='fruits_list'>
<img src={Britannia} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Britannia<br/>
</a>
</div>
<div className='fruits_list'>
<img src={Parle} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Parle<br/>
</a>
</div>
<div className='fruits_list'>
<img src={Cardbury} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
<a href='#' className='fruit-name'>Cardbury<br/>
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