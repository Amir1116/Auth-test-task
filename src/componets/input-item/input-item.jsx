import React from 'react';
import './input-item-style.scss';

const InputItem = (props) =>{
    const {type, name, placeholder,label,htmlForId,value,handleChange,isInvalid } = props;

    const inputCls = !isInvalid?'form-control':'form-control input-error';

    return(
        <div className='form-group'>
        <label htmlFor={htmlForId} className="col-sm-2 col-form-label">{label}</label>
        <div className="">
          <input
           type={type}
           name={name} 
           className={inputCls} 
           id={htmlForId} 
           placeholder={placeholder} 
           value={value} 
           onChange={handleChange}
           required
           />
        </div> 
        {isInvalid&&<p className='invalid-mes'><strong>{name}</strong> is not correct!</p>}  
        </div>   
    )
}

export default InputItem;