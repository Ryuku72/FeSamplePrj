import { USER_LOGIN, USER_LOGOUT, USER_ERROR, USER_ERROR_CLR, FETCH_COLOR, USER_LOADED, LOGOUT_RECIEVED} from '../actions/types'

const initialState = {
    name: "",
    color: "",
    userLoggedIn: false,
    userError: false,
    errorText: "",
    userLoading: false,
}

export default function(state = initialState, action) {
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                name: action.payload,
                userLoggedIn: true,
                userError: false,
                userLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                userLoading: false
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
            userLoading: true,
            errorText: "#USER LOGGED OUT"
         }
    case LOGOUT_RECIEVED:
         return {
             ...state,
             userLoading: false
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