import React,{Component} from 'react';
import './login-page-style.scss';
import InputItem from '../input-item';
import Button from '../button';

class LoginPage extends Component{
    // constructor(){
    //     super()
    //     // this.state={            
    //     //         email:{
    //     //             value:'',
    //     //             isInvalid:false,
    //     //         },
    //     //         password:{
    //     //             value:'',
    //     //             isInvalid:false,
    //     //         },            
    //     // }
    // }


    loginHandler=()=>{

    }
    submitHandler=(e)=>{
        e.preventDefault();
    }

    render(){
        return(
            <div className='container container-form-width'>
                <h2 className='login-page-title'>Login Page</h2>
                <form onSubmit={this.submitHandler}>
                    <div className="mb-3">
                        <InputItem 
                            type='text'
                            name='email'
                            placehotder='enter your email...'
                            label='Email address'
                            htmlForId ='emailId'
                            invalid
                            // value={this.state.formControls.email.value}
                            // handleChange={(e)=> setEmail(e.target.value)}
                        />          
                    </div>
                    <div className="mb-3">
                        <InputItem 
                            type='password'
                            name='password'
                            placehotder=''
                            label='Password'
                            htmlForId= 'passId'
                            invalid
                            // value={password}
                            // handleChange={}
                        />                    
                    </div> 
                    <Button 
                    btnClasses='btn-primary'
                    disabled={false}
                    handleClick={this.loginHandler}    
                    >
                    login
                    </Button>            
                   
                </form>
            </div>
        )
    }
    
}

export default LoginPage;