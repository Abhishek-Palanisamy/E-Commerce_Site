import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userSlice';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';

function Myorders() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  const [userOrders, setUserOrders] = useState([]);

  const uname = localStorage.getItem('uname');

  useEffect(() => {
    axios.get(`http://localhost/test/formGet2.php?uname=${uname}`)
      .then((response) => {
        const fetchedOrders = response.data || [];
        setUserOrders(fetchedOrders);
      })
      .catch((error) => {
        console.error('Error fetching user orders:', error);
      });
  }, [uname]);

  console.log('userOrders:', userOrders); // Log userOrders to the console

  const deleteContact = (id, e) => {
    e.preventDefault();
    if (window.confirm("Are you sure want to delete?")) {
      axios({
        method: 'post',
        url: `http://localhost/test/formDelete1.php/?delete=${id}`
      })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
          }
        })
        .catch(function (response) {
          console.log(response);
        });
    }
    window.location.reload();

  };
  return (
    <>
      <Navbar1 />
      <div className='bg-light pt-2 pb-2 fs-5 fw-bold w-50'>
        <Container>
          <Navbar.Brand>My Orders</Navbar.Brand>
        </Container>
      </div>

      <div className="space1 mt-3 ms-5 mb-3 text-black">
        <b>User: {username}</b>
      </div>

      <Container className="container-Myorders w-50 ms-5">
        {userOrders.length > 0 ? (
          userOrders.map((order) => (
            <div key={order.id} className="card-container mb-4">
              <Card>
                <Card.Body>
                  <h6 className="fw-bolder text-black">Booking Id : {order.id}</h6>
                  <div className="details-2 ms-5 pb-2">
                    <br />
                    <p className='fw-medium'>Total Quantity : {order.totalquantity}</p>
                    <p className='fw-medium'>Total Price : {order.bill}</p>
                    <p className='fw-medium'>Payment Mode : {order.payment}</p>
                  </div>
                  <div className='ms-0 fw-bold'>
                    <p>Estimated Delivery Date : 03-01-2023<span className='text-primary'></span></p>
                  </div>
                  <hr />
                  <Button variant="danger" className="w-auto mt-0 mb-0" onClick={(e) => deleteContact(order.id, e)}>
                    <i className="fa fa-trash" style={{ fontSize: "large" }} /> Delete
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-danger fs-4" style={{marginBottom:"32%"}}>No Orders Found.</p>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default Myorders;
