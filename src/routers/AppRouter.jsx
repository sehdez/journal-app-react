import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';


import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from 'react-router-dom';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);




  useEffect( () => {
    
    firebase.auth().onAuthStateChanged(user => {
      if (user?.uid) {
        dispatch( login( user.uid, user.displayName ) );
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [ dispatch, setChecking ]); 

  if (checking) {
    return (
      <div className='auth__main' >
        <div className='auth__box-container'>
          <h2>Cargando...</h2>
        </div>
      </div>
    );
  }
  
  return (
    <Router>
        <div>
            <Switch>
                 <PublicRoute 
                    path="/auth"
                    isAuthenticated={isLoggedIn}
                    component={ AuthRouter } 
                 />
                 <PrivateRoute
                    exact 
                    path="/" 
                    isAuthenticated={ isLoggedIn }
                    component={ JournalScreen } />
                 <Redirect to="/auth/login" />

            </Switch>
        </div>
    </Router>
  )
}