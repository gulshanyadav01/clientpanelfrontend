import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
}
from "./Action";
import axios from "axios";


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


