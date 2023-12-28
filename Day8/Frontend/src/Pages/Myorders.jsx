import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/userSlice';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import { Navbar } from 'react-bootstrap';

function Myorders() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  const [loading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);

  return (
    <>
    <Navbar1/>
      <div className='bg-light pt-2 pb-2 fs-5 fw-bold w-50' >
        <Container>
          <Navbar.Brand>My Orders</Navbar.Brand>
        </Container>
      </div>

      <div className="space1 mt-3 ms-5 mb-3 text-black">
              <b>User : {username}</b>
      </div>

      <Container className="container-Myorders w-50 ms-5">
        <div className="card-container">
          <Card>
            <Card.Body>
                <h6 className="fw-bolder text-black">Booking Id : </h6>

                  <div className="details-2 ms-5 pb-2">
                    <br />
                    <p className='fw-medium'>Total Quantity : </p>
                    <p className='fw-medium'>Total Price : </p>
                    <p className='fw-medium'>Payment Mode : </p>
                  </div>
                  <div className='ms-0 fw-bold'>
                  <p>Estimated Delivery Date : <span className='text-primary'>01/01/2024</span></p>
                  </div>

              <hr />
              <Button variant="danger" className="w-auto">
                <i className="fa fa-trash" style={{ fontSize: "large" }} /> Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      </Container>
<Footer/>
    </>
  );
}

export default Myorders;
