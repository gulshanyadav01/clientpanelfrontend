import React, { useState } from 'react'
import {connect} from "react-redux";
import {userLogin} from "../../Store/Action/AuthAction"
import {Redirect, useHistory} from "react-router-dom";


const Login = ({userLogin}) => {
    const history = useHistory();
    const [formdata, setFormData] = useState({
        
        email:"",
        password:""
    })

    const onChange = (e) => {
        setFormData({...formdata, [e.target.name]: e.target.value});
    
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {email, password} = formdata;
        // console.log(`${name} ${email} ${password}`)
        userLogin({email, password});
        history.push("/");
        

    }

    return(
<div className = "w-80 h-72 m-auto mt-40 bg-green-400 rounded ">
            <form className = "p-2 ml-6" onSubmit = {onSubmit}>
            
            <div>
                <label htmlFor = "email">email:</label><br/>
                <input 
                type = "email"
                name = "email"
                placeholder = "enter email"
                value = {formdata.email}
                onChange = {onChange}
                /> 
            </div>
            <div>
                <label htmlFor = "password">password:</label><br/>
                <input 
                type = "text"
                name = "password"
                placeholder = "enter password"
                value = {formdata.password}
                onChange = {onChange}
                /> 
            </div>
           
            
            <div>
                <input type = "submit" value = "submit"  className = "px-2 mt-1 cursor-pointer ml-20 py-1 bg-red-400 rounded shadow"/>
            </div>
            </form>
        </div>

    )
}


export default connect(null,{userLogin} )(Login);

































