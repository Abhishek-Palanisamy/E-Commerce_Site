import React from 'react'
import '../Assests/CSS/styles.css'
function Login() {
  return (
    <>
    <div className='main_container'>
    <div className='login-container'>
    <h1 className='login-header'>Login</h1>
    <div className='login-field'>
    <label>Username: </label>
    <input type='text'></input>
    </div>
    <div className='login-field'>
    <label>Password: </label>
    <input type='password' className='inpt-pass'></input>

    </div>
    <button className='login-button'>Login</button>
    </div>
    </div>
    </>
  )
}

export default Login