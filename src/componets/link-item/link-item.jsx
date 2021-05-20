import React from 'react';
import {NavLink} from 'react-router-dom';

const LinkItem = (props) =>{
    const {linkRef,label} = props
    return (
        <NavLink to={linkRef} activeClassName="selected" className='nav-link'>{label}</NavLink>
    )
}

export default LinkItem;