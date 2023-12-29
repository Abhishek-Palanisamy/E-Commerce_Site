import React, { useState } from 'react';
import { Button, Container, Form, InputGroup, Row, Col } from 'react-bootstrap';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { blue } from '@mui/material/colors';
import '../Assests/CSS/Signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [uname, setUname] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [emailid, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const nav=useNavigate('');

  const authenticate= () => {
    const url = 'http://localhost/test/formSubmit.php';
    let fData = new FormData();
    fData.append('uname', uname);
    fData.append('mobileno', mobileno);
    fData.append('emailid', emailid);
    fData.append('pwd', pwd);
    axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    nav("/log")
    alert("Registered Successfully")
  };


  return (
    <Container fluid>
      <div className="login-page2 ">
        <div className='backgrnd1 '></div>
        <div className="login2 bg-light">
          <center><h2 className='fs-3 text-black'>Registration</h2></center>
          <Form className="form-login2 bg-light" onSubmit={authenticate}>
            <Form.Group controlId="formName">
              <Form.Label>User Name</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <AccountCircleIcon sx={{ color: blue[900] }} fontSize='medium' className='icon1'   />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Enter your Name" value={uname} onChange={(e) => setUname(e.target.value)} required />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formMobile" className='mt-4'>
              <Form.Label>Mobile Number</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <PhoneAndroidIcon sx={{ color: blue[900] }} fontSize='medium' className='icon1' color='success' />
                </InputGroup.Text>
                <Form.Control type="tel" pattern="[6789][0-9]{9}" minLength={10} maxLength={10} placeholder="Enter your Number" value={mobileno} onChange={(e) => setMobileno(e.target.value)} required />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formEmail" className='mt-4'>
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <EmailIcon sx={{ color: blue[900] }} fontSize='medium' className='icon1' color='success' />
                </InputGroup.Text>
                <Form.Control type="email" placeholder="Enter your Email" value={emailid} onChange={(e) => setEmail(e.target.value)} required />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPassword" className='mt-4'>
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <LockIcon sx={{ color: blue[900] }} fontSize='medium' className='icon1' color='success' />
                </InputGroup.Text>
                <Form.Control type="password" minLength={8} maxLength={16} placeholder="Enter your Password" value={pwd} onChange={(e) => setPwd(e.target.value)} required />
              </InputGroup>
            </Form.Group>

            {isRegistered && (
              <div className="success-popup">
                <div className="success-popup-content">
                  <h3>Registration Successful</h3><br /><br />
                  <Button className='btn12'>Done</Button>
                </div>
              </div>
            )}

            <Button type="submit">Register</Button>
          <Link to='/log' className='text-decoration-none'>  <Form.Text className="text-muted">Already Have An Account?</Form.Text></Link>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Signup;
