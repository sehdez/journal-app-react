import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import{ types } from '../types/types'


export const startLoginEmailPassword = ( email, password ) => {
    return async (dispatch) => {
        // const { email, password } = data;
        // const resp = await firebase.auth().signInWithEmailAndPassword( email, password );
        // dispatch( authLogin( resp.user.uid, redirect ) );

    
        setTimeout( () => { 
            dispatch( login( 1234, 'pedro' ) );
        }, 3000);
    }
}

export const startGoogleLogin = () => {
    return async (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch( login( user.uid, user.displayName ) );
            });
    }
}

// Forma corta
export const login = ( uid, displayName )=> ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})      


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

