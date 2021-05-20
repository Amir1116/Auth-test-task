import React from 'react';
import './footer-style.scss';

const Footer = () =>{
    return (
        <footer className='footer bg-primary d-flex align-items-center' >
            <span className='footer__date'>{new Date().getFullYear()}</span>
        </footer>
    )
}

export default Footer;