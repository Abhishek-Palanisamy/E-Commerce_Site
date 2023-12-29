import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Assests/CSS/styles.css'
import {addToCart} from '../Redux/features/cartSlice'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import ProductDataBeve from './ProductDataBeve';
const DescriptionBeve = () => {
    const nav=useNavigate('');
  const [cardData, setCardData] = useState(ProductDataBeve);
  const dispatch = useDispatch();


  // add to cart 
  const send = (e)=>{
      dispatch(addToCart(e))
      toast.success("Item added In Your Cart")
  }
  const view = (id) => {
    console.log(id);
    nav(`/bevedetails/${id}`);
    toast.success("Item added In Your Cart");
  };
  
  return (
    <>

    <Navbar1/>
    <div className='enclosure_description d-flex flex-column '>
    <div className='banner_description container-fluid'>
    <img src='https://img.freepik.com/free-vector/realistic-green-tea-horizontal-banner-with-ornate-brand-name-ice-cubes-leaves-plastic-bottle-pack-shot-vector-illustration_1284-30563.jpg?w=1380&t=st=1703825459~exp=1703826059~hmac=8397b0778fd6a3163b417745530866981070e2462409856dba65869e8145c0a8' className='img-fluid mt-2 rounded float-start' style={{ width: '1250px', height: '370px' ,marginLeft:'7%'}}/>
    </div>
    <section className='iteam_section mt-1 ml-13 container'>
    <div className='row mt-4 d-flex justify-content-around align-items-center'>
        {
            cardData.map((element, index) => {
                return (
                    <>
                        <Card style={{ width: "17.5rem", border: "none" }} className='hove mb-4'>
                            <Card.Img variant='top' className='cd' src={element.img}/>

                            <div className="card_body">
                            <h4 className='mt-2' style={{color:'grey',fontSize:'14px'}}></h4>
                            <div className="upper_data d-flex justify-content-between  align-items-center">
                                    <h4 className=''>{element.name}</h4>
                                    <span>3.8&nbsp;✦</span>

                                    </div>

                                <div className="lower_data d-flex justify-content-between ">
                                    <h5> {element.weight}</h5>
                                    <span>₹ {element.price}</span>
                                </div>
                                <div className="extra"></div>

                                <div className="last_data d-flex justify-content-evenly align-items-center">
                                    <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
                                        className='mt-2 mb-2' onClick={()=>send(element)}
                                        
                                    >Add To Cart</Button>&nbsp;
                                    <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
                                        className='mt-2 mb-2' onClick={()=>view(element.id)}
                                        
                                    >View</Button>
                                </div>
                            </div>
                        </Card>
                    </>
                )
            })
        }

    </div>
</section>
</div>
<Footer/>
    </>
  )
}

export default DescriptionBeve