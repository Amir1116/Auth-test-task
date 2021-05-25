import React from 'react';
import {NavLink} from 'react-router-dom';

const LinkItem = (props) =>{
    const {linkRef,label} = props
    return (
        <NavLink 
        exact to={linkRef}
        className='nav-link'>{label}</NavLink>
    )
}

export default LinkItem;