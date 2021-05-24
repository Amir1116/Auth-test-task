import {CREATE_USER, REG_USER} from '../actions/register-types';


const initialState = {
    formControls:{
        email:{
            value:'',
            isValid:false,
            isInvalid:false
        },
        password:{
            value:'',
            isValid:false,
            isInvalid:false,
        },
        confPass:{
            value:'',
            isValid:false,
            isInvalid:false,                                
        }            
    },
    allValid:false,           
}

export function registerUser(state=initialState,action){
    switch(action.type){
        case CREATE_USER:{
            
        }
        default:
            return state;
    }
}

export function createUserData(){
    return dispatch = {
            // const inputName = e.target.name;
        // const formControls = {...this.state.formControls};
        // const eControl = {...formControls[inputName]};
        // eControl.value = e.target.value;
        // eControl.isInvalid = inputName!=='confPass'?(this.validateInputs(inputName,eControl.value)): (validateConfPass(this.state.formControls.password.value, eControl.value)); 
        // eControl.isValid = !eControl.isInvalid;      
        // formControls[inputName]=eControl;
        // const allValidate = this.allValid(formControls);
        // this.setState({
        //     formControls,
        //     allValid:allValidate
        // }) 
    }
}