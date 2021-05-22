import React from 'react';
import './alert-style.scss';

const Alert = ({error}) =>{       
    return(       
        <div className="alert alert-danger  wth">      
        <strong>Oh snap!</strong> {error}
        </div>          
    )
}

export default Alert;