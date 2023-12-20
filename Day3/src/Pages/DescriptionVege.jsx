import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductDataVege from './ProductDataVege'
import '../Assests/CSS/styles.css'
import {addToCart} from '../Redux/features/cartSlice'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
const Description = () => {
    const nav=useNavigate('');
  const [cardData, setCardData] = useState(ProductDataVege);
  const dispatch = useDispatch();


  // add to cart 
  const send = (e)=>{
      dispatch(addToCart(e))
      toast.success("Item added In Your Cart")
  }
  const view = (id) => {
    console.log(id);
    nav(`/vegetabledetails/${id}`);
    toast.success("Item added In Your Cart");
  };
  
  return (
    <>

    <Navbar1/>
    <div className='enclosure_description d-flex flex-column '>
    <div className='banner_description container-fluid'>
    <img src='https://th.bing.com/th/id/OIP.5zgg5FQ8bEyRtRN6uW0g6QHaD7?pid=ImgDet&w=197&h=104.63956639566396&c=7&dpr=1.3' className='img-fluid mt-2 rounded float-start' style={{ width: '1250px', height: '370px' ,marginLeft:'7%'}}/>
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
                            <h4 className='mt-2' style={{color:'grey',fontSize:'14px'}}>Fresho</h4>
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
                                        
                                    >Add To Cart</Button>
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

export default Description