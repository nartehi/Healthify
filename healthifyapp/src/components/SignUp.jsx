import React from 'react';
import './SignUp.css';

export default function SignUp() {
  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper'>
        <img src="" alt="" />
        <div className='sign-up__container'>
          <h2>Sign Up</h2>
          <form className='sign-up__form'>
            <div className='name-inputs'>
              <div className='form-group'>
                <label>First Name</label>
                <input type='text' placeholder='' />
              </div>
              <div className='form-group'>
                <label>Last Name</label>
                <input type='text' placeholder='' />
              </div>
            </div>
            <div className='form-group'>
              <label>Username: </label>
              <input type='text' placeholder='username' />
            </div>
            <div className='form-group'>
              <label>Password: </label>
              <input type='password' placeholder='Password' />
            </div>
            <button type='submit' className='btn-sign'>
              Let's Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
