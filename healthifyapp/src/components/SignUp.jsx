import React from 'react';
import './SignUp.css';

export default function SignUp() {
  return (
    <div className='background'>
      <div className='form-modal__container'>
        <div className='form-modal__wrapper'>
          <div className='sign-up__container'>
            <h2>Sign Up</h2>
            <form className='sign-up__form'>
              <div className='name-inputs'>
                <div className='form-group'>
                  <label>First Name</label>
                  <input type='text' placeholder='John' />
                </div>
                <div className='form-group'>
                  <label>Last Name</label>
                  <input type='text' placeholder='Doe' />
                </div>
              </div>
              <div className='form-group'>
                <label>Username</label>
                <input type='text' placeholder='johndoe' />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input type='password' placeholder='Password' />
              </div>
              <button type='submit' className='btn-sign'>
                Let's Go
              </button>
            </form>
            <div>
              <p className='have-account'>
                Have an account? <span>Log In here</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
