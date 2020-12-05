import {ADD_CLIENT,
     DELETE_CLIENT_BY_ID,
      GET_CLIENTS,
       UPDATE_CLIENT_BY_ID,
        GET_CLIENT_BY_ID 
} from "./Action"
import axios from "axios";

export const addClient = (newClient) => async dispatch => { 
    const res = await axios.post("http://localhost:5000/client/add", newClient);
    // console.log(res.data.client);

    dispatch({
        type:ADD_CLIENT,
        payload:res.data.client
        
    });
    // this.props.history.push("/");

}


export const getClients = () =>  async dispatch => {
    const response = await axios.get("http://localhost:5000/client/getclients");

    dispatch({
        type:GET_CLIENTS,
        payload: response.data.clients
    })
    
}

export const deleteClientById = (id ) => async dispatch => {
    await axios.delete(`http://localhost:5000/client/deleteclient/${id}`); 
    console.log(id);
    dispatch({
        type:DELETE_CLIENT_BY_ID,
        payload:id
    })
}


export const getClientById = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:5000/client/getclientbyid/${id}`); 
    // console.log(res.data.client);
    dispatch({
        type:GET_CLIENT_BY_ID,
        payload:res.data.client
    })
}