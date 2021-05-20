import React from 'react';
import NavBar from '../navbar';
import {Link} from 'react-router-dom';
import './header-style.scss';

const Header = (props) =>{
    // const {isLogged,handleLogged} = props;
    return (
        <header className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between navbar-padding'>  
            <h1><Link to='/' className='navbar-brand'>Pages</Link></h1>          
            <NavBar  {...props}/>
        </header>
    )
}

export default Header;