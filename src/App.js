import React from 'react';
import AddClient from "./components/AddClient"
import {Provider } from "react-redux";
import store from "./Store/Store"
import Clients from "./components/Clients"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const  App = () =>  {
  return (
    <Provider store = {store}>
    <div className="App">
    <Router>
    <Switch>
     <Route exact path = "/" component = {Clients}/>
     <Route exact path = "/addclient" component = {AddClient}/>
     </Switch>
     </Router>
    </div>
    </Provider>
  );
}

export default App;
