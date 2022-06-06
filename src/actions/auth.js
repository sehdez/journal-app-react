import Swal from 'sweetalert2';
import { firebase, googleAuthProvider, } from '../firebase/firebase-config';
import{ types } from '../types/types'
import { finishLoading, startLoading } from './ui';


export const startLoginEmailPassword = ( email, password ) => {
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ({ user }) => {
            console.log(user);
            dispatch( login( user.uid, user.displayName ) );
            dispatch( finishLoading() );
        })
        .catch( (e) => {
            dispatch( finishLoading() );
            Swal.fire({
                title: 'Error',
                text: e.message,
                icon: 'error',
            })
        });
        
    }
}

export const startGoogleLogin = () => {
    return async (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch( login( user.uid, user.displayName ) );
            })
    }
}


export const startRegisterEmailPassword = ( email, password, name ) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async ({ user }) => {
            await user.updateProfile({displayName: name});
            console.log( user )
            // dispatch( login( user.uid, user.displayName ) );
        })
        .catch( e =>{
            
            Swal.fire({
                title: 'Error',
                text: e.message,
                icon: 'error',
            })
        } )
    }
}



// Forma corta
export const login = ( uid, displayName )=> ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch( logout() );
    }
}
export const logout = () => ({
    type: types.logout
});

// Forma larga
// export const login = ( uid, displayName )=> {
//     return {
//         type: types.login,
//         payload: {
//             uid,
//             displayName
//         }
//     }      
// }

