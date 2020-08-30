import { USER_LOGIN, USER_LOGOUT, USER_ERROR, USER_ERROR_CLR, FETCH_COLOR } from '../actions/types'

const initialState = {
    name: "",
    color: "",
    userLoggedIn: false,
    userError: false,
    errorText: ""
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
        case FETCH_COLOR:
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
            userError: true,
            errorText: "#USER LOGGED OUT"
         }
    case USER_ERROR:
        return { 
            ...state,
            name: "",
            userLoggedIn: false,
            userError: true,
            errorText: "#PLEASE ENTER AT LEAST 4 LETTERS"
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