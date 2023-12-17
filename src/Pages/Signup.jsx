import React from 'react'

function Signup() {
  return (
    <>
    <div className='main_container1'>
    <div className='signup-container'>
    <h1 className='signup-header'>Signup</h1>
    <div className='signup-field'>
    <label>Username: </label>
    <input type='text'></input>
    </div>
    <div className='signup-field'>
    <label>Email-Id: </label>
    <input type='text'></input>
    </div>
    <div className='signup-field'>
    <label>Mobile: </label>
    <input type='text'></input>
    </div>
    <div className='signup-field'>
    <label>Password: </label>
    <input type='password' ></input>
    </div>
    <div className='signup-field'>
    <label>Confirm Password: </label>
    <input type='password' ></input>
    </div>
    <button className='signup-button'>Signup</button>
    </div>
    </div>
    </>
  )
}

export default Signup