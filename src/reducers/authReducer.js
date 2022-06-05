// State
// {
//     uid: 'sakfjvhfkjbva',
//     name: 'Sergio'
// }

import { types } from "../types/types"

// const initialState = {
//     uid: '1234932rjclsdknvfdv',
//     name: 'Sergio',
//     email: 'asdva@asdf' 
// }

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return {}
        default: 
            return state
    }
}