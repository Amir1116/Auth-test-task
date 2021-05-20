import React from 'react';
import LinkItem from '../link-item';
import './navbar-style.scss';

const Navbar = (props) =>{    
    const {isLogged,handleLogged} = props;
    const mainNav = (
        <>
            <li className='nav-item' >
                <LinkItem  linkRef='/' label='Home'/>
            </li>
            <li className='nav-item' >
                <LinkItem  linkRef='/login/' label='Login'/>
            </li>
            <li className='nav-item'>
                <LinkItem  linkRef='/registration' label='Registration'/>
            </li>
            <li className='nav-item'>
                <LinkItem  linkRef={isLogged?'/profile/':'/registration'} label='Profile'/>
            </li>
        </>    
        )
    const loggedNav = (
        <>
            <li className='nav-item' >
                <LinkItem  linkRef='/' label='Home'/>
            </li>
            <li className='nav-item'>
            <button type='button' className='btn btn-dark' onClick={handleLogged} >Log Out</button>
            </li>
            <li className='nav-item'>
                <LinkItem  linkRef='/profile/'label='Profile'/>
            </li>
        </>
    )    

    
    return(
        <nav>            
            <ul className='navbar-nav me-auto'>
             {isLogged?loggedNav:mainNav}               
            </ul>
        </nav>
    )
}

export default Navbar;