import React from 'react'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';
import { startRegisterEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);
  


  const [ values, handleInputChange ] = useForm( {
    name : 'Sergio',
    email  : 'sergio@sergio.com',
    password: '123456',
    password2: '123456'
});


  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    if( isFormValid()) {
      dispatch( startRegisterEmailPassword( email, password, name ) )
    }
  }

  const isFormValid = () => {
    if (name.trim().length <= 2) {
      dispatch(setError('Name is required'));
      return false;
    } else if( !validator.isEmail(email) ) {
      dispatch(setError('Email is not valid'));
      return false;

    }else if(password.trim().length <= 5) {
      dispatch(setError('Password should be at least 6 characters'));
      return false;
    } else if(password !== password2) {
      dispatch(setError('Passwords do not match'));
      return false;
    }
    dispatch(removeError());
    return true;
  }


  return (
    <div>
        <h3 className='auth__title'>Register</h3>
        <form autoComplete='off'
              onSubmit={ handleRegister }>
          
          { 
            msgError && 
            <div 
              className='auth__alert-error'
              >{ msgError }
            </div> 
            }
          
          <input 
            className='auth__input'
            type="text" 
            placeholder='Name'
            name='name'
            onChange={ handleInputChange }
            value={ name }/>
          <input 
            className='auth__input'
            type="text" 
            placeholder='Email'
            name='email'
            onChange={ handleInputChange }
            value={ email }/>
          
          <input 
            className='auth__input'
            type="password" 
            placeholder='Password'
            name='password'
            onChange={ handleInputChange }
            value={ password }/>

          <input 
            className='auth__input'
            type="password" 
            placeholder='Confirm password'
            name='password2'
            onChange={ handleInputChange }
            value={ password2 }/>

          <button
            className='btn btn-primary btn-block mt-5 mb-5'
            disabled= { false }
            type='submit'
            onClick={ handleRegister }>
              Register
          </button>

          <Link className='link' to="/auth/login">
            Already registered?
          </Link>


        </form>
    </div>
  )
}
