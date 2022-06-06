import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { 
  // login, 
  startGoogleLogin, 
  startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.ui);
  console.log(isLoading);


  const [ values, handleInputChange ] = useForm( {
      email : 'sergio@sergio.com',
      password: '123456'
  });


  const { email, password } = values;
  const [ viewPassword, setViewPassword ] = useState(false);

  const handleViewPassword = ( e ) => {
    e.preventDefault();
    setViewPassword(!viewPassword);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  }
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  return (
    <div>
        <h3 className='auth__title'>Login</h3>
        <form autoComplete='off'>
          <input 
            className='auth__input'
            type='text' 
            placeholder='Email'
            name='email'
            value={ email }
            onChange={ handleInputChange }/>

          <input 
            className='auth__input'
            type={ viewPassword ? 'text' : 'password' } 
            placeholder='Password'
            name='password'
            value={ password }
            onChange={ handleInputChange } /> 
            
          <button 
            type='button'
            onClick={ handleViewPassword } 
            className='btn btn-primary mb-1'
            >
              Ver contraseña
            </button>

          <button
            className='btn btn-primary btn-block'
            disabled= { isLoading }
            type='submit'
            onClick={ handleLogin }>
              Login
          </button>
          
          <div 
            className='auth__social-networks' 
            onClick={ handleGoogleLogin }>
            <p>Login with social networks</p>
            
            <div className="google-btn">
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
            </p>
            </div>
          </div>
          <Link className='link' to="/auth/register">
            Create new account
          </Link>


        </form>
    </div>
  )
}
