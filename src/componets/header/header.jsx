import React from 'react';
import NavBar from '../navbar';
import {Link} from 'react-router-dom';
import './header-style.scss';

const Header = (props) =>{
    const {isLogged} = props;
    return (
        <header className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between navbar-padding'>  
            <h1><Link to='/' className='navbar-brand'>Pages</Link></h1>          
            <NavBar  isLogged={isLogged}/>
        </header>
    )
}

export default Header;