import {CREATE_DATA, REG_USER} from './register-types';


export function createUserData(event){
    return {
        type: CREATE_DATA,
        event: event
    }
}

export function registerUser(){
    return{
        type:REG_USER,
    }
}