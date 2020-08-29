import { USER_LOGIN, USER_LOGOUT, USER_ERROR, USER_ERROR_CLR, FETCH_COLOR } from '../actions/types'

const initialState = {
    userName: "",
    color: "",
    userLoggedIn: false,
    userError: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                userName: action.payload,
                userLoggedIn: true,
            }
        case USER_LOGIN:
            return {
                ...state,
                color: action.payload,
        }        
    case USER_LOGOUT:
        return { 
            ...state,
            userName: "",
            color: "",
            userLoggedIn: false,
            userError: false
         }
    case USER_ERROR:
        return { 
            ...state,
            userName: "",
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