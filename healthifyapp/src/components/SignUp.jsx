import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='background'>
      <div className='form-modal__container'>
        <div className='form-modal__wrapper'>
          <div className='sign-up__container'>
            <h2 className='sign-up'>Sign Up</h2>
            <form className='sign-up__form'>

              <div className='form-group'>
                  <label>First Name: </label>
                  <input type='text' placeholder='' />
              </div>

              <div className='form-group'>
                  <label>Last Name: </label>
                  <input type='text' placeholder='' />
                </div>

              

              <div className='form-group'>
                <label>Username: </label>
                <input type='text' placeholder='' />
              </div>

              <div className='form-group'>
                <label>Password: </label>
                <input type='password' placeholder='' />
              </div>

              <Link to="/HealthMap">
              <button type='submit' className='btn-sign'>
                Let's Go
              </button>
              </Link>
              
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
