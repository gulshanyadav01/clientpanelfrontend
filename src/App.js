import React from 'react';
import AddClient from "./components/AddClient"
import {Provider } from "react-redux";
import store from "./Store/Store"
import Clients from "./components/Clients"

const  App = () =>  {
  return (
    <Provider store = {store}>
    <div className="App">
     {/* <AddClient/> */}
     <Clients/>
    </div>
    </Provider>
  );
}

export default App;
