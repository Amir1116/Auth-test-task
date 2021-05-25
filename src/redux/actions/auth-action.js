import {REG_URL,LOGIN_URL}  from '../../axios/base_url.js';
import {API_KEY} from '../../axios/api-key.js';
import axios from 'axios';
import {LOGIN_SUCCESS, AUTH_LOGOUT, REG_SUCCESS, ERROR, USER_EMAIL} from '../../redux/actions/action-types.js';


export const register = (email,password) => {
    return async dispatch =>{
         const authData = {
            email, password,
            returnSecureToken:true,
        }; 
        let url = `${REG_URL}${API_KEY}`;         
        try{
            const axiosRes = await axios.post(url, authData);            
            const data = axiosRes.data;                    
            dispatch(registerSuccess(data.idToken));                               
        } catch (e){
            dispatch(errorHandler(e));
        } 
    }
}

export const login = (email,password) => {
    return async dispatch =>{
         const authData = {
            email, password,
            returnSecureToken:true,
        }; 
        let url = `${LOGIN_URL}${API_KEY}`;         
        try{
            const axiosRes = await axios.post(url, authData);            
            const data = axiosRes.data;
            const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
            localStorage.setItem('token', data.idToken);
            localStorage.setItem('userId', data.localId);
            localStorage.setItem('expirationDate',expirationDate);
            dispatch(loginSuccess(data.idToken));
            dispatch(userEmail(data))
            dispatch(autoLogout(data.expiresIn));                    
        } catch (e){
            dispatch(errorHandler(e));
        } 
    }
}

export const registerSuccess = (token) =>{
    return{
        type:REG_SUCCESS,
        token
    }
} 

export const errorHandler = (error) =>{    
    let message = (error.response.data.error.message).toLowerCase().replace(/_/g,' ');    
    return {
        type:ERROR,
        error: message,
    }
}

export const loginSuccess = (token) =>{
    return{
        type:LOGIN_SUCCESS,
        token
    }
}

export const autoLogout  = (time) => {
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout());
        },time*1000)
    }   
}

export const userEmail = (data) => {
    let email = data.email 
    return{
        type: USER_EMAIL,
        email
    }
}

export const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expirationDate');
    return{
        type:AUTH_LOGOUT,  
    }
}