import {LOGIN_SUCCESS,AUTH_LOGOUT, REG_SUCCESS,ERROR,USER_EMAIL} from '../../redux/actions/action-types.js';



const initialState = {
    email:null,
    token:null,
    isRegister:false,
    isLogged:false,
    error:null,
    
}

export default function authReducer(state=initialState ,action){
    switch(action.type){
        case REG_SUCCESS : 
            return{
                ...state, token:action.token, isRegister: true,
            }

        case LOGIN_SUCCESS :
            return{
                ...state, token:action.token, isLogged: true, error:null
            }
        case AUTH_LOGOUT:
            return{
                ...state, token:null, isLogged:false,
            }
        case USER_EMAIL:
            return{
                ...state, email:action.email
            }    
        case ERROR:{
            return{
                ...state, error:action.error,
            }
        }    
        default:
            return state;
    }

}