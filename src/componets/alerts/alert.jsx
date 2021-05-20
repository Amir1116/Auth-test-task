import React from 'react';
import './alert-style.scss';

const Alert = (props) =>{
    const {success} = props;
    

    const alertDanger = (
        <div className="alert alert-danger  wth">      
        <strong>Oh snap!</strong> and try submitting again.
        </div>
    )
    const alertSuccess = (
        <div className="alert alert-success wth ">      
        <strong className='successText'>Success !</strong>
        </div>
    )    
    return(
       <>
       {success?alertSuccess:alertDanger}
       </>
    )
}

export default Alert;