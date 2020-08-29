import { USER_LOGIN, USER_LOGOUT, USER_ERROR, USER_ERROR_CLR, FETCH_COLOR } from '../actions/types'

const initialState = {
    name: "",
    color: "",
    userLoggedIn: false,
    userError: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                name: action.payload,
                userLoggedIn: true,
                userError: false
            }
        case USER_LOGIN:
            return {
                ...state,
                color: action.payload,
        }        
    case USER_LOGOUT:
        return { 
            ...state,
            name: "",
            color: "",
            userLoggedIn: false,
            userError: false
         }
    case USER_ERROR:
        return { 
            ...state,
            name: "",
            userLoggedIn: false,
            userError: true
         }
    case USER_ERROR_CLR:
        return { 
            ...state,
            userError: false,
        }
    default:
        return state;
    }
}