import {ADD_CLIENT,
     DELETE_CLIENT_BY_ID,
      GET_CLIENTS,
       UPDATE_CLIENT_BY_ID,
        GET_CLIENT_BY_ID 
} from "./Action"
import axios from "axios";

export const addClient = (newClient) => async dispatch => { 
    const res = await axios.post("http://localhost:5000/client/add", newClient);

    dispatch({
        type:ADD_CLIENT,
        payload:res.data
        
    });
}


export const getClients = () =>  async dispatch => {
    const response = await axios.get("http://localhost:5000/client/getclients");
    // console.log("hello"); 

    dispatch({
        type:GET_CLIENTS,
        payload: response.data.clients
    })
    // console.log("hello");
    // const res = await axios.get('http://localhost:5000/client/getclients');
    // console.log(res.data.clients);
    // dispatch({
    //     type:GET_CLIENTS,
    //     payload:res.data
    // })
}