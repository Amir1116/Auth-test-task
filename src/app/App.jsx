import React,{Component,Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.scss';
import Header from '../componets/header';
import MainPage from '../componets/main/';
import LoginPage from '../componets/login-page';
import RegisterPage from '../componets/register-page';
import ProfilePage from '../componets/profile-page';
import Footer from '../componets/footer';

class App extends Component {

  constructor(){
    super()
    this.state={
      userName:'',
      isLogged:false,
    }
  }
  handleIsLogged = ()=>{
    this.setState((prevLogged)=>{      
      return{
        isLogged:!prevLogged.isLogged,
      }
    }) 
    }

  hadleUserName = (name)=>{
    this.setState({
      userName: name
    })
  }  

  render(){    

    return (
      <Fragment>
        <Header 
        isLogged={this.state.isLogged} 
        // handleLogged={this.handleIsLogged}
        />
        <div className='main-section'>      
          <Switch>
            <Route exact path='/' >
              <MainPage/> 
            </Route>
            <Route exact path='/login'>
              <LoginPage handleLogged={this.handleIsLogged} handleUserName={this.hadleUserName}/>
            </Route>  
            <Route exact path='/registration'>
             <RegisterPage/>  
            </Route> 
            <Route exact path='/profile'>
              <ProfilePage user={this.state.userName}/> 
            </Route> 
          </Switch>
        </div>
  
      <Footer/>
      </Fragment>
    );
  }

}

export default App;
