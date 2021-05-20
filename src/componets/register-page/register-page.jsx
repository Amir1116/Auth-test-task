import React,{useState} from 'react';
import InputItem from '../input-item';

const RegisterPage = () =>{
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confPass,setConfPass] = useState('');
    return(
        <div className='container container-form-width'>
            <h2 className='login-page-title'>Registration Page</h2>
            <form>
                <div className="mb-3">
                    <InputItem 
                        type='text'
                        name='email'
                        placehotder='enter your email...'
                        label='Email address'
                        htmlForId ='emailId'
                        value={email}
                        handleChange={(e)=>setEmail(e.target.value)}
                    />          
                </div>
                <div className="mb-3">
                    <InputItem 
                        type='password'
                        name='email'
                        placehotder=''
                        label='Email address'
                        htmlForId= 'passId'
                        value={password}
                        handleChange={(e)=>setPassword(e.target.value)}
                    />                    
                </div>             
                <div className="mb-3">
                    <InputItem 
                        type='password'
                        name='confPass'
                        placehotder=''
                        label='Confirm password'
                        htmlForId= 'confPassId'
                        value={confPass}
                        handleChange={(e)=>setConfPass(e.target.value)}
                    />                    
                </div>             
                <button type="submit" className="btn btn-primary mt-3">Register
                </button>
            </form>
        </div>
    )
}

export default RegisterPage;