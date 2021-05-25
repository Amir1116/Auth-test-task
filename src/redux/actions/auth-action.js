import {REG_URL,LOGIN_URL}  from '../../axios/base_url.js';
import {API_KEY} from '../../axios/api-key.js';
import axios from 'axios';
import {AUTH_SUCCESS, AUTH_LOGOUT} from '../../redux/actions/action-types.js';


export function auth(email,password,isLogin){
    return async dispatch =>{
         const authData = {
            email, password,
            returnSecureToken:true,
        }; 
        let url = `${REG_URL}${API_KEY}`;  
        if(isLogin){
            url = `${LOGIN_URL}${API_KEY}`;
        }
        try{
            const axiosRes = await axios.post(url, authData);
            console.log(axiosRes.data)
            const data = axiosRes.data;
            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
            localStorage.setItem('token', data.idToken);
            localStorage.setItem('userId', data.localId);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(authSuccess(data.idToken));
            dispatch(autoLogout(data.expiresIn));
            // this.state.history.push('/login');            
        } catch (e){
            console.log(e);
        } 
    }
}

// export function 


export function authSuccess (token){
    return{
        type:AUTH_SUCCESS,
        token
    }
}

export function autoLogout (time){
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout());
        },time*1000)
    }   
}

export function logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expirationDate');
    return{
        type:AUTH_LOGOUT,  
    }
}