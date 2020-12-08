import React,{useEffect} from 'react';
import AddClient from "./components/AddClient"
import {Provider } from "react-redux";
import store from "./Store/Store"
import Clients from "./components/Clients"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppNavbar from "./components/AppNavbar"
import Detail from "./components/Detail"
import Register from "./components/UserAuth/Register"
import {loadUser } from "./Store/Action/AuthAction";
import SetAuthToken from "./utils/SetAuthToken"

// if(localStorage.token){
//   SetAuthToken(localStorage.token);

// }

const  App = () =>  {

  // useEffect(()=>{
  //   store.dispatch(loadUser());
  // },[]);

  return (
    <Provider store = {store}>
      <div className="App">
        <AppNavbar/>
          <Router>
            <Switch>
              <Route exact path = "/" component = {Clients}/>
              <Route exact path = "/addclient" component = {AddClient}/>
              <Route exact path = "/detail/:id" component = {Detail}/>
              <Route exact path = "/register" component = {Register}/>
            </Switch>
          </Router>
      </div>
    </Provider>
  );
}

export default App;
