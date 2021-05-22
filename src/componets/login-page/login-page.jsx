import React,{Component} from 'react';
import './login-page-style.scss';
import InputItem from '../input-item';
import {validateEmail,validatePassword} from '../../validation/validation';
import Button from '../button';
import {API_KEY} from '../../axios/api-key';
import {LOGIN_URL} from '../../axios/base_url';
import axios from 'axios';
import Alert from '../alerts';
import {withRouter} from 'react-router-dom';

class LoginPage extends Component{
    constructor(props){
        super(props)
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
            },
            allValid:false, 
            errorMessage:'',                     
        }         
    }

    validateInputs=(input,value,)=>{
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
        eControl.isInvalid = this.validateInputs(inputName,eControl.value) 
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

    loginHandler= async ()=>{
        const authData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken:true,
        };        
        try{
            const axiosRes = await axios.post(`${LOGIN_URL}${API_KEY}`, authData);           
            this.props.handleUserName(axiosRes.data.email)            
            this.props.handleLogged();            
            this.props.history.push('/profile')

        } catch (e){
            const errorMessage = (e.response.data.error.message).toLowerCase().replace(/_/g,' ');            
            this.setState({
                errorMessage:errorMessage,
            })           
        } 
    }
    submitHandler=(e)=>{
        e.preventDefault();
    }

    render(){
        const disabledBtn = !this.state.allValid;
        const error = this.state.errorMessage||false;             
        return(            
            <div className='container container-form-width'>
                <h2 className='login-page-title'>Login Page</h2>
                <form onSubmit={this.submitHandler}>
                    {error&&<Alert error={error}/>}
                    <div className="mb-3">
                        <InputItem 
                            type='text'
                            name='email'
                            placehotder='enter your email...'
                            label='Email address'
                            htmlForId ='emailId'
                            isInvalid={this.state.formControls.email.isInvalid}
                            value={this.state.formControls.email.value}
                            handleChange={this.onChangeHandler}
                        />          
                    </div>
                    <div className="mb-3">
                        <InputItem 
                            type='password'
                            name='password'
                            placehotder=''
                            label='Password'
                            htmlForId= 'passId'
                            isInvalid={this.state.formControls.password.isInvalid}
                            value={this.state.formControls.password.value}
                            handleChange={this.onChangeHandler}
                        />                    
                    </div> 
                    <Button 
                    btnClasses='btn-primary'
                    disabled={disabledBtn}
                    handleClick={this.loginHandler}    
                    >
                    login
                    </Button>            
                   
                </form>
            </div>
        )
    }
    
}

export default withRouter(LoginPage);