import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import { blue } from '@mui/material/colors';
import '../Assests/CSS/Login.css';
import axios from 'axios';
import { login } from '../redux/features/userSlice';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login() {
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState();
  const nav=useNavigate('')
  const dispatch=useDispatch('')

  const auth =  (e) => {
     

        if (uname&&pwd) {
          // Successful login, navigate to another page or perform other actions
          dispatch(login(uname));
          nav('/');
        } else {
          // Display an alert for unsuccessful login
          alert(Unsuccessful);
        
      }
    
  }

  return (
    <>
      <div className='backgrnd'> </div>
      <div className="login-page1 d-flex justify-content-center align-items-center min-vh-100">
        <div className="login1 w-40 p-5 " >
          <center><h3 className='fw-bold text-black mb-5'>Login</h3></center>
          <Form className="form-login1 w-80" onSubmit={auth}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <div className="input-email d-flex ">
                <AccountCircleIcon sx={{ color: blue[900] }} fontSize='medium' color='success' className='mt-1'/>
                <Form.Control
                  type="text"
                  value={uname}
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

            <Button type="submit" variant='primary' className='w-100 rounded-pill primary mt-4 '>
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
