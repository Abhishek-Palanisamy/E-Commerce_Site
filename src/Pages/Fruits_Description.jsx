import React, { useEffect, useState } from 'react'
import '../Assests/CSS/styles.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Orange from '../Assests/Images/orange_fruits.jpg';
import Cherry from '../Assests/Images/cherry_fruits.jpg';
import Apple from '../Assests/Images/apple_fruits.jpg';
import Pineapple from '../Assests/Images/pineapple_fruits.jpg';
import Pomegranate from '../Assests/Images/pomegranate_fruits.jpg';
import Papaya from '../Assests/Images/papaya_fruits.jpg';
import Mango from '../Assests/Images/Mango_fruits.jpg';
import Lemon from '../Assests/Images/lemon_fruits.jpg';
import Kiwi from '../Assests/Images/Kiwi_fruits.jpg';
import Guava from '../Assests/Images/guava_fruits.jpg';
import Grapes from '../Assests/Images/grapes_fruits.jpg';
import Blueberry from '../Assests/Images/blueberry_fruits.jpg';
import Banana from '../Assests/Images/Banana_fruit.jpg';
import Watermelon from '../Assests/Images/Watermelon_fruits.jpg';
import Strawberry from '../Assests/Images/strawberry_fruits.jpg';
import FruitsBanner from '../Assests/Images/fruits_banner.webp';
import {  AddIcon } from '@chakra-ui/icons'

function Fruits_Description({data}) {
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
    <div className='lists-description'>
    <div className='ads-banner'>
    <div className="carousel1">
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
  
    <span className="indicators1">
      {data.map((_, idx) => {
        return (
          <button
            key={idx}
            className={
              slide === idx ? "indicator1" : "indicator1 indicator1-inactive"
            }
            onClick={() => setSlide(idx)}
          ></button>
        );
      })}
    </span>
  </div>
    <img src={FruitsBanner} className='banners'/>
    </div>

    <div className='lists-description-enclosure'>
    <div className='flex-container'>
    <div className='category-menu'>
    <p className='category'>Categories</p>
    <p className='subcategory'>
    <a href='#' className='list'>All</a><br/>
    <a href='#' className='list'>Fruits</a><br/>
    <a href='#' className='list'>Vegetables</a><br/>
    <a href='#' className='list'>Dairy Poultry</a><br/>
    <a href='#' className='list'>Meat Fish</a><br/>
    <a href='#' className='list'>Oils Foodgrains</a><br/>
    <a href='#' className='list'>Snacks</a><br/>
    <a href='#' className='list'>Beverages</a><br/>
    </p>
    </div>

    <div className='category-menu'>
    <p className='category'>Search By Brands</p>
    <p className='subcategory'>
    <a href='#' className='list'>All</a><br/>
    <a href='#' className='list'>Amul</a><br/>
    <a href='#' className='list'>Nestle</a><br/>
    <a href='#' className='list'>Cardbury</a><br/>
    <a href='#' className='list'>Parle</a><br/>
    <a href='#' className='list'>Britannia</a><br/>
    </p>
    </div>
    </div>


    <div className='lists-details'>
    <div className='fruits-container2'>
    <div className='fruits_list2'>
    <img src={Orange} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'16px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Orange<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    <div className='fruits_list2'>
    <img src={Cherry} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Cherry<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    <div className='fruits_list2'>
    <img src={Pineapple} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Pineapple<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>

    </div>
    <div className='fruits_list2'>
    <img src={Apple} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>

    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Apple<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    <div className='fruits_list2'>
    <img src={Strawberry} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Strawberry<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    </div>
    <div className='fruits-container2'>
    <div className='fruits_list2'>
    <img src={Pomegranate} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'16px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Pomegranate<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    <div className='fruits_list2'>
    <img src={Kiwi} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Kiwi<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    <div className='fruits_list2'>
    <img src={Grapes} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Grapes<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>

    </div>
    <div className='fruits_list2'>
    <img src={Watermelon} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>

    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Watermelon<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    <div className='fruits_list2'>
    <img src={Guava} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Guava<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    </div>
    <div className='fruits-container2'>
    <div className='fruits_list2'>
    <img src={Blueberry} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'16px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Blueberry<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    <div className='fruits_list2'>
    <img src={Mango} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Mango<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    <div className='fruits_list2'>
    <img src={Banana} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Banana<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>

    </div>
    <div className='fruits_list2'>
    <img src={Papaya} style={{height:"200px",width:"180px",borderRadius:"9px"}}/>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>

    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Papaya<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    <div className='fruits_list2'>
    <img src={Lemon} style={{height:"200px",width:"170px",borderRadius:"9px"}}/>
    <p>
    <i class="fa fa-truck" style={{fontSize:'18px'}} id='shipping-icon'/><span className='timing'>12 hrs</span>
    </p>
    <a href='#' className='fruit-name2'><p className='fresho'> Fresho</p> Lemon<br/>
    <p className='price'>Rs. 100(1 Kg) <span className='strike'>Rs. 240</span></p>
    </a>
    <button className='addbtn'>Add<AddIcon boxSize={12} className='plussymbol'/></button>
    </div>
    </div>

    
    
    
    </div>
    
    
    
    
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Fruits_Description