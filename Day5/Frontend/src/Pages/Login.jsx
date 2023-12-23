import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import { blue } from '@mui/material/colors';
import '../Assests/CSS/Login.css';
import { login } from '../redux/features/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Login() {
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState();
  const nav=useNavigate('')
  const dispatch=useDispatch('')

  const auth = async (e) => {
    e.preventDefault();
  
    // Check if the username exists in the backend
    try {
      const response = await axios.post('http://localhost/test/loginCheck.php', {
        uname: uname,
        pwd:pwd,
        // Include password if needed for authentication
        // password: pwd,
      });
      console.log(uname)
      console.log(pwd)
      if (response.data.exists) {
        // Username exists, perform login logic
        dispatch(login(uname));
        nav('/');
      } else {
        // Username does not exist, display an alert or handle it appropriately
        console.log(response.data.message);
      }
    } catch (error) {
      console.error('Error checking username:', error);
      // Display an error message to the user or redirect to an error page
      alert('An unexpected error occurred. Please try again later.');
    }
  };
  
  
  return (
    <>
      <div className='backgrnd'> </div>
      <div className="login-page1 d-flex justify-content-center align-items-center min-vh-100">
        <div className="login1 w-40 p-5 " >
          <center><h3 className='fw-bold text-black mb-5'>Login</h3></center>
          <Form className="form-login1 w-80" onSubmit={auth}>
            <Form.Group controlId="uname">
              <Form.Label>Username</Form.Label>
              <div className="input-email d-flex ">
                <AccountCircleIcon sx={{ color: blue[900] }} fontSize='medium' color='success' className='mt-1'/>
                <Form.Control
                  type="text"
                  value={uname}
                  name='uname'
                  placeholder="Enter your Username"
                  onChange={(e) => setUname(e.target.value)}
                  required
                  style={{border:'none'}}
                  className='w-60'
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <div className="input-password d-flex">
                <LockIcon sx={{ color: blue[900] }} fontSize='medium' color='success'  className='mt-1'/>
                <Form.Control
                  type="password"
                  value={pwd}
                  minLength={8}
                  maxLength={16}
                  placeholder="Enter your Password"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Button type="submit" variant='primary' name='save' className='w-100 rounded-pill primary mt-4 '>
              <LoginIcon  fontSize='medium' color='success' className='text-white m-1' /> Login
            </Button>

            <Form.Text className="text-muted">
              New? Click Here..
            </Form.Text>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
