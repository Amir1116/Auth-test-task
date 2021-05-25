import React,{Component} from 'react';
import LinkItem from '../link-item';
import './navbar-style.scss';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/auth-action'

class Navbar extends Component{ 
   
    render(){
        const {isLogged,logout} = this.props;
        const mainNav = (
            <>
                <li className='nav-item' >
                    <LinkItem  linkRef='/' label='Home'/>
                </li>
                <li className='nav-item' >
                    <LinkItem  linkRef='/login/' label='Login'/>
                </li>
                <li className='nav-item'>
                    <LinkItem  linkRef='/registration' label='Registration'/>
                </li>               
            </>    
            )
        const loggedNav = (
            <>
                <li className='nav-item' >
                    <LinkItem  linkRef='/' label='Home'/>
                </li>
                <li className='nav-item'>
                <button type='button' className='btn btn-dark'
                 onClick={logout} 
                 >Log Out</button>
                </li>
                <li className='nav-item'>
                    <LinkItem  linkRef='/profile/'label='Profile'/>
                </li>
            </>
        )     
        
        return(
            <nav>            
                <ul className='navbar-nav me-auto'>
                 {isLogged?loggedNav:mainNav}               
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) =>({
   isLogged: state.auth.isLogged,
})

const mapDispatchToProps = (dispatch) =>({
    logout:()=>dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps )(Navbar);