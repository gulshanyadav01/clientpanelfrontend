import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL
    
}
from "./Action";
import axios from "axios";
import SetAuthToken from "../../utils/SetAuthToken";

// Load user 

export const loadUser = () => async dispatch =>{
    if(localStorage.token){
        SetAuthToken(localStorage.token);

    }
    try{
        const res = await axios.get("http://localhost:5000/user/signup")
        dispatch({
            type:USER_LOADED,
            payload: res.data
        });

    }catch(err){
        dispatch({
            type:AUTH_ERROR
        })
    }
}


//


// register users 
export const register = ({name, email, password}) => async dispatch =>{
    console.log(name);
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    const body = JSON.stringify({name, email, password});
    try{
        const res = await axios.post("http://localhost:5000/user/signup", body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

    }catch(error){
        dispatch({
            type:REGISTER_FAIL

        })

    }
}

// login user 


export const login = ({ email, password}) => async dispatch =>{
    
    const config = {
        headers:{
            "Content-Type":"application/json"
        }
    }
    const body = JSON.stringify({email, password});
    try{
        const res = await axios.post("http://localhost:5000/user/login", body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

    }catch(error){
        dispatch({
            type:LOGIN_FAIL

        })

    }
}

