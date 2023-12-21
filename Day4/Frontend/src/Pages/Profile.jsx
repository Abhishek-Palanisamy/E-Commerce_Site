import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../Assests/CSS/Profile.css';
import Footer from '../Components/Footer';
import Navbar1 from '../Components/Navbar1';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState({
    uname: '',
    mobileno: '',
    emailid: '',
    address: '',
  });
  useEffect(() => {
    // Retrieve the username from local storage
    const uname = localStorage.getItem('username');

    if (uname) {
      // Make a GET request to your PHP script with the username
      axios
        .get(`http://localhost/test/formGet1.php?uname=${uname}`)
        .then((response) => {
          const fetchedData = response.data[0]; // Assuming you expect only one user
          setUserData(fetchedData);
        })
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    // Make a POST request to update user details
    axios
      .post('http://localhost/test/formUpdate.php', {
        uname: userData.uname,
        mobileno: userData.mobileno,
        emailid: userData.emailid,
        address: userData.address,
      })
      .then((response) => {
        console.log(response.data);
        // Optionally, you can update state or show a success message
      })
      .catch((error) => console.error('Error updating user data:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };





  return (
    <>
      <Navbar1 />
      <Container className="registration-container mt-5 mb-5">
        <h2 className="mb-4 text-black">Profile</h2>
        <Form onSubmit={handleUpdate}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={userData.uname}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="mobileNo">
            <Form.Label className="mt-4">Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your mobile number"
              name="mobileNo"
              value={userData.mobileno}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label className="mt-4">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={userData.emailid}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="address">
          <Form.Label className='mt-4'>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your address"
            name="address"
            value={userData.address}
            onChange={handleChange}
            required
          />
        </Form.Group>

          <Button className="w-50 btn-update" variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
