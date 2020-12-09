import {
    REGISTER_USER,
    REGISTER_USER_FAIL,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    USER_PROFILE,
    USER_PROFILE_FAIL
  } from "./Action"

  import axios from 'axios'
import SetAuthToken from "../../utils/SetAuthToken"


  export const userProfile = () =>  async dispatch => {
    if (localStorage.token) {
      SetAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('http://localhost:5000/user/');
      dispatch({
        type: USER_PROFILE,
        payload: res.data
      })
    } catch (err) {
        console.log(err.response)
        dispatch({
            type : USER_PROFILE_FAIL,
            payload: err.response
        })
    }
  }


  export const registerUser = ({name, email, password}) => async dispatch => {
     console.log("hi")
       const config = {
           headers : {
               "Content-Type":"application/json"
           }
       }
       const data = {
           name,
           email,
           password
       }

       try {
         const res =  await axios.post('http://localhost:5000/user/signup' , data , config)
         dispatch({
             type : REGISTER_USER,
             payload: res.data
         })
         
         userProfile()
      
       } catch (err) {
           console.log(err.response.data.msg)
           dispatch({
               type : REGISTER_USER_FAIL,
               payload: err.response.data.msg
           })
       }
  }




export const userLogin = (data) => async dispatch =>  {
    const config = {
        headers : {
            "Content-Type":"application/json"
        }
    }
    try{
        const res = await axios.post('http://localhost:5000/user/login',data, config);
        
        // console.log('in Action' , res.data)
        dispatch({
            type:LOGIN_USER,
            payload: res.data
        })
        userProfile()
    }catch (err) {
        console.log(err.response.data.msg)
        dispatch({
            type : LOGIN_USER_FAIL,
            payload: err.response.data.msg
        })
    }
}