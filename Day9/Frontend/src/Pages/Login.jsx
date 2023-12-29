import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import { blue } from '@mui/material/colors';
import '../Assests/CSS/Login.css';
import { login } from '../redux/features/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function Login() {
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const nav = useNavigate('');
  const dispatch = useDispatch('');

  const auth = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const url = 'http://localhost/test/loginCheck.php';
      let fData = new FormData();
      fData.append('uname', uname);
      fData.append('pwd', pwd);

      const response = await axios.post(url, fData);

      console.log(JSON.stringify(response.data, null, 2));

      if (response.data.success) {
        // Username exists, dispatch the login action
        dispatch(login(uname));
        localStorage.setItem('uname', uname);
        // Navigate only if the username exists
        if(uname=="admin"&&pwd=="admin123")
        {
          nav("/registertable")
        }
        else{
          nav('/');
        }
      } else {
        // Handle the case where the username does not exist
        alert(response.data.message);
      }
    } catch (error) {
      // Handle errors (e.g., display an error message)
      alert('An error occurred during authentication.');
      console.error(error);
    } 
  };

  return (
    <>
      <div className='backgrnd'> </div>
      <div className='login-page1 d-flex justify-content-center align-items-center min-vh-100'>
        <div className='login1 w-40 p-5 '>
          <center>
            <h3 className='fw-bold text-black mb-5'>Login</h3>
          </center>
          <Form className='form-login1 w-80' onSubmit={auth}>
            <Form.Group controlId='uname'>
              <Form.Label>Username</Form.Label>
              <div className='input-email d-flex '>
                <AccountCircleIcon sx={{ color: blue[900] }} fontSize='medium' color='success' className='mt-1' />
                <Form.Control
                  type='text'
                  value={uname}
                  name='uname'
                  placeholder='Enter your Username'
                  onChange={(e) => setUname(e.target.value)}
                  required
                  style={{ border: 'none' }}
                  className='w-60'
                />
              </div>
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <div className='input-password d-flex'>
                <LockIcon sx={{ color: blue[900] }} fontSize='medium' color='success' className='mt-1' />
                <Form.Control
                  type='password'
                  value={pwd}
                  placeholder='Enter your Password'
                  onChange={(e) => setPwd(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Button
              type='submit'
              variant='primary'
              name='save'
              className='w-100 rounded-pill primary mt-4 '
            >
              Login
            </Button>

            
           <Link to='/signup'  className='text-decoration-none'> <Form.Text className='text-muted fw-bold '>New? Click Here..</Form.Text><br/><br/></Link>

            </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
