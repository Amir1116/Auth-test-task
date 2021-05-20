import React,{Component,Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.scss';
import Header from '../componets/header';
import MainPage from '../componets/main/';
import LoginPage from '../componets/login-page';
import RegisterPage from '../componets/register-page';
import ProfilePage from '../componets/profile-page';
import Loader from '../componets/loader'
import Footer from '../componets/footer';

class App extends Component {

  constructor(){
    super()
    this.state={
      isLogged:true,
    }
  }
  handleIsLogged = ()=>{
    this.setState((prevLogged)=>{
      return{
        isLogged:!prevLogged,
      }
    })

  }

  render(){    

    return (
      <Fragment>
        <Header isLogged={this.state.isLogged} handleLogged={this.handleIsLogged}/>
        <div className='main-section'>
         <Loader/>
          <Switch>
            <Route exact path='/' component={MainPage} /> 
            <Route exact path='/login' component={LoginPage} /> 
            <Route exact path='/registration' component={RegisterPage} /> 
            <Route exact path='/profile' component={ProfilePage} /> 
          </Switch>
        </div>
  
      <Footer/>
      </Fragment>
    );
  }

}

export default App;
