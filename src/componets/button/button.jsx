import React from 'react';
import './button-style.scss';

const Button = (props) =>{

    const {btnClasses, handleClick, disabled } = props;
    let cls = `btn mt-3  ${btnClasses}`;
    if(disabled){
       cls+=' disabled'
    }
    return (
        <button         
        className={cls}        
        onClick = {handleClick}
        disabled ={disabled}       
        >
            {props.children}
        </button>
    )
}

export default Button;