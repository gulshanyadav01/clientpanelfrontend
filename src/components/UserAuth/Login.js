import React, { Component } from 'react'
import {connect} from "react-redux";
import {register} from "../../Store/Action/AuthAction"
import {Redirect} from "react-router-dom";




class Login extends Component {
    state = {
        email:"",
        password:""
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        const {email, password} = this.state; 
        // console.log(this.state);
        const newContact = {
            email,
            password
        }
        this.props.register(newContact);
        return <Redirect to ="/"/>

    }
    render() {
        const { email, password} = this.state;

        return (
            <div className = "w-80 h-72 m-auto mt-40 bg-green-400 rounded ">
            <form className = "p-2 ml-6" onSubmit = {this.onSubmit}>
           
            <div>
                <label htmlFor = "email">email:</label><br/>
                <input 
                type = "email"
                name = "email"
                placeholder = "enter email"
                value = {email}
                onChange = {this.onChange}
                /> 
            </div>
            <div>
                <label htmlFor = "password">password:</label><br/>
                <input 
                type = "text"
                name = "password"
                placeholder = "enter password"
                value = {password}
                onChange = {this.onChange}
                /> 
            </div>
           
            
            <div>
                <input type = "submit" value = "submit"  className = "px-2 mt-1 cursor-pointer ml-20 py-1 bg-red-400 rounded shadow"/>
            </div>
            </form>
        </div>
        )
    }
}
export default connect(null,{register} )(Login);