import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../Assests/CSS/Billing.css'
import Footer from '../Components/Footer';
import Navbar1 from '../Components/Navbar1';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { emptycartIteam } from '../redux/features/cartSlice';
const Billing = () => {
  const dispatch = useDispatch();

  const [uname, setUname] = useState("");
  const [address, setAddress] = useState("");
  const [emailid, setEmail] = useState("");
  const [payment, setPayment] = useState("Cash On Delivery");
  const [productItems, setProductItems] = useState([]);
    const user = useSelector(selectUser);
    const nav=useNavigate('');
    const username = user.user?.username || 'Guest';
    const bill = localStorage.getItem('totalprice');
    const totalquantity=localStorage.getItem('totalquantity');

    const checkoutsubmit= () => {
      const url = 'http://localhost/test/formSubmit1.php';
      let fData = new FormData();
      fData.append('uname', uname);
      fData.append('address', address);
      fData.append('emailid', emailid);
      fData.append('bill', bill);
      fData.append('totalquantity', totalquantity);
      fData.append('payment', payment);
    
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
 
        dispatch(emptycartIteam());
      
      nav("/")

    };
    useEffect(() => {
      const storedProductItems = localStorage.getItem('productItems');
      if (storedProductItems) {
        setProductItems(JSON.parse(storedProductItems));
      }
    }, []);
    const cancel=()=>{
      nav("/")
    }
  
  return (
    <>
    <Navbar1/>
    <Container className="billing-container mt-5 mb-5">
      <h2 className='mb-4'>Billing Information</h2>
      <Form onSubmit={checkoutsubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={uname} onChange={(e) => setUname(e.target.value)}
            name="name"
            required
          />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label className='mt-4'>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your address"
            value={address} onChange={(e) => setAddress(e.target.value)}
            name="address"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className='mt-4'>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={emailid} onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className='mt-4 '>Total Bill</Form.Label>
          <Form.Control
          type="text"
          readOnly
          value={bill}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label className='mt-4 '>Total Quantity</Form.Label>
          <Form.Control
          type="text"
          readOnly
          value={totalquantity}
          />
        </Form.Group>

        <Form.Group controlId="paymentMethod">
          <Form.Label className='mt-4'>Payment Method</Form.Label>
          <Form.Control
            as="select"
            name="paymentMethod"
            value={payment}
          >
            <option value="cod">Cash on Delivery (Default)</option>
          </Form.Control>
        </Form.Group>
        <div className="d-flex gap-2">
        <Button variant="danger" type="submit" onClick={cancel}>
        Cancel Order
      </Button>
        <Button variant="primary" type="submit">
          Place Order
        </Button>
        </div>
      </Form>
      </Container>
      <Footer/>
      </>
  );
};

export default Billing;
