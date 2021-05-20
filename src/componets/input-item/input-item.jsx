import React from 'react';
import './input-item-style.scss';

const InputItem = (props) =>{
    const {type, name, placeholder,label,htmlForId,value,handleChange } = props;
    return(
        <div className='form-group'>
        <label htmlFor={htmlForId} className="col-sm-2 col-form-label">{label}</label>
        <div className="">
          <input type={type} name={name}className="form-control" id={htmlForId} placeholder={placeholder} value={value} onChange={handleChange}/>
        </div>   
        </div>   
    )
}

export default InputItem;