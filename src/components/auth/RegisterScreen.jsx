import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <div>
        <h3 className='auth__title'>Register</h3>
        <form autoComplete='off'>
          <input 
            className='auth__input'
            type="text" 
            placeholder='Name'
            name='name'/>
          <input 
            className='auth__input'
            type="text" 
            placeholder='Email'
            name='email'/>
          
          <input 
            className='auth__input'
            type="password" 
            placeholder='Password'
            name='password'/>

          <input 
            className='auth__input'
            type="password" 
            placeholder='Confirm password'
            name='password2'/>

          <button
            className='btn btn-primary btn-block mt-5 mb-5'
            disabled= { false }
            type='submit'>
              Register
          </button>

          <Link className='link' to="/auth/login">
            Already registered?
          </Link>


        </form>
    </div>
  )
}
