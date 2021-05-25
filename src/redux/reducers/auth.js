import {AUTH_SUCCESS,AUTH_LOGOUT} from '../../redux/actions/action-types.js';



const initialState = {
    token:null,
    isLogged:false,
}
export default function authReducer(state=initialState,action){
    switch(action.type){
        case AUTH_SUCCESS :
            return{
                ...state, token:action.token, isLogged: true,
            }
        case AUTH_LOGOUT:
            return{
                ...state, token:null, isLogged:false,
            }
        default:
            return state;
    }

}