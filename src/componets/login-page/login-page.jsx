import React,{useState} from 'react';
import './login-page-style.scss';
import InputItem from '../input-item';

const LoginPage = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return(
        <div className='container container-form-width'>
            <h2 className='login-page-title'>Login Page</h2>
            <form>
                <div className="mb-3">
                    <InputItem 
                        type='text'
                        name='email'
                        placehotder='enter your email...'
                        label='Email address'
                        htmlForId ='emailId'
                        value={email}
                        handleChange={(e)=> setEmail(e.target.value)}
                    />          
                </div>
                <div className="mb-3">
                    <InputItem 
                        type='password'
                        name='password'
                        placehotder=''
                        label='Password'
                        htmlForId= 'passId'
                        value={password}
                        handleChange={(e)=>setPassword(e.target.value)}
                    />                    
                </div>             
                <button type="submit" className="btn btn-primary mt-3">Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage;