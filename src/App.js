import React,{useEffect} from 'react';
import AddClient from "./components/AddClient"
import {Provider } from "react-redux";
// import store from "./Store/Store"
import Clients from "./components/Clients"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppNavbar from "./components/AppNavbar"
import Detail from "./components/Detail"
import Register from "./components/UserAuth/Register"
import {loadUser } from "./Store/Action/AuthAction";
import SetAuthToken from "./utils/SetAuthToken"
import Login from "./components/UserAuth/Login"
import PrivateRoute from "./components/Private"
import {store , persistor}  from './Store/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { userProfile} from "./Store/Action/AuthAction"

if(localStorage.token){
  SetAuthToken(localStorage.token)

}

const  App = () =>  {

  useEffect(()=>{
    store.dispatch(userProfile());
  },[]);

  return (
    <Provider store = {store}>
     <PersistGate loading={null} persistor={persistor}>
      <div className="h-screen" style = {{backgroundColor:"#152036"}}>
        
          <Router>  
          <AppNavbar/>
            <Switch>
              <PrivateRoute exact path  = "/" component = {Clients}/>
              <PrivateRoute exact path = "/addclient" component = {AddClient}/>
              <Route exact path = "/detail/:id" component = {Detail}/>
              <Route exact path = "/register" component = {Register}/>
              <Route exact path = "/login" component = {Login}/>
            </Switch>
          </Router>
      </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
