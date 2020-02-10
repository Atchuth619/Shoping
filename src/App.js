import React, { Component } from 'react';
import Homepage from './homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Directory/Shop/ShopPage';
import './App.css';
import  Header from './Components/Header/header'; 
import Registration from './Pages/RegistrationPage/registration';
import {auth} from './Components/fireBase/firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }
  
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=> {
      this.setState({ currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
  return (
    <>
    <Header/> 
    <Switch>
      <Route exact path = "/" component={Homepage}/>
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={Registration}/>
    </Switch>
    </>
  );
 }
}

export default App;
