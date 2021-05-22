import React,{Component} from 'react';
import InputItem from '../input-item';
import Button from '../button';
import {validateEmail,validatePassword,validateConfPass} from '../../validation/validation';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class RegisterPage extends Component {
    constructor(){
        super()
        this.state={ 
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
    }

    validateRegister=(input,value,)=>{
        let isInvalid = true;
        switch(input){
            case 'email':
                return isInvalid = !validateEmail(value);
            case 'password':
                return isInvalid = !validatePassword(value);                  
            default:
                return isInvalid;    
        }
        
    }

    onChangeHandler=(e)=>{  
        const inputName = e.target.name;
        const formControls = {...this.state.formControls};
        const eControl = {...formControls[inputName]};
        eControl.value = e.target.value;
        eControl.isInvalid = inputName!=='confPass'?(this.validateRegister(inputName,eControl.value)): (validateConfPass(this.state.formControls.password.value, eControl.value)); 
        eControl.isValid = !eControl.isInvalid;      
        formControls[inputName]=eControl;
        const allValidate = this.allValid(formControls);
        this.setState({
            formControls,
            allValid:allValidate
        })                  
    }   

    allValid = (obj)=>{
        const valid = (Object.values(obj)).every((control)=>control.isValid===true);
        return valid;     
    }

    registerHandler=()=>{
       
    }
    submitHandler=(e)=>{
        e.preventDefault();
        // let history = useHistory();
        const userData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
        }   
        console.log(userData);      
        this.props.history.push('/login');     
    }
    
    
    render(){
        const disabledBtn = !this.state.allValid;
        console.log(this.props); 
        return(
            <div className='container container-form-width'>
                <h2 className='login-page-title'>Registration Page</h2>
                <form onSubmit={this.submitHandler}>
                    <div className="mb-3">
                        <InputItem 
                            type='text'
                            name='email'
                            placehotder='enter your email...'
                            label='Email address'
                            htmlForId ='emailId'
                            value={this.state.formControls.email.value}
                            handleChange={(e)=>{
                                this.onChangeHandler(e)
                            }}
                            isInvalid={this.state.formControls.email.isInvalid}
                        />          
                    </div>
                    <div className="mb-3">
                        <InputItem 
                            type='password'
                            name='password'
                            placehotder=''
                            label='Password'
                            htmlForId= 'passId'
                            value={this.state.formControls.password.value}
                            handleChange={(e)=>{
                                this.onChangeHandler(e)
                            }}
                            isInvalid={this.state.formControls.password.isInvalid}
                        />                    
                    </div>             
                    <div className="mb-3">
                        <InputItem 
                            type='password'
                            name='confPass'
                            placehotder=''
                            label='Confirm password'
                            htmlForId= 'confPassId'
                            value={this.state.formControls.confPass.value}
                            handleChange={(e)=>{
                                this.onChangeHandler(e)
                            }}
                            isInvalid={this.state.formControls.confPass.isInvalid}
                            
                        />                    
                    </div>  
                    <Button
                     disabled={disabledBtn}
                     btnClasses='btn-primary'
                     hadleClick={this.registerHandler}
                     >register</Button>           
                   
                </form>
            </div>
        )
    
}
}

export default withRouter(RegisterPage);