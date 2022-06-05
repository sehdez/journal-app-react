import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

// import { combineReducers, legacy_createStore as createStore } from 'redux'
import { authReducer } from '../reducers/authReducer'

// const reducers = combineReducers({
//     auth: authReducer
// })

// export const store = createStore( 
//     reducers,
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )


export const store = configureStore({
    reducer: {
        auth: authReducer
    }
}, [thunk])

// // later
// function fetchUser(id) {
//     // The `extraArgument` is the third arg for thunk functions
//     return (dispatch, getState, api) => {
//       // you can use api here
//     }
//   }
