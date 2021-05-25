import React,{Component,Fragment} from 'react';
import {Route,Switch,Redirect,} from 'react-router-dom';
import './App.scss';
import Header from '../componets/header';
import MainPage from '../componets/main/';
import LoginPage from '../componets/login-page';
import RegisterPage from '../componets/register-page';
import ProfilePage from '../componets/profile-page';
import Footer from '../componets/footer';
import {connect} from 'react-redux';
class App extends Component { 

  render(){ 
    
    return (
      <Fragment>
        <Header 
        isLogged={this.props.isLogged} 
        
        />
        <div className='main-section'>      
          <Switch>
            <Route exact path='/' >
              <MainPage/>              
            </Route>
            <Route exact path='/login'>
              {this.props.isLogged?<Redirect exact to='/profile'/>:<LoginPage />}               
            </Route>  
            <Route exact path='/registration'>
              {this.props.isRegister?<Redirect exact to='/login'/>:<RegisterPage/> }             
            </Route> 
            <Route exact path='/profile'> 
              <ProfilePage/>          
            </Route>
            
          </Switch>        
        </div>
  
      <Footer/>
      </Fragment>
    );
  }

}
const mapStateToProps = (state) =>({
  isRegister:state.auth.isRegister,
  isLogged: state.auth.isLogged,  
})


export default connect(mapStateToProps)(App);
