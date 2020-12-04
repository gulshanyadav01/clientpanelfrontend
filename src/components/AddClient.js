import React, { Component } from "react";
import { connect } from "react-redux"; 
import { addClient } from "../Store/Action/ClientAction"


class AddClient extends Component {
    state = { 
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        balance:""
    }

    onChange = (e) => { 
        this.setState({[e.target.name]: e.target.value});

    }

    onSubmit = (e) => { 
        e.preventDefault(); 
        const { firstName, lastName, email, phone, balance} = this.state; 

        const newClient = {
            firstName,
            lastName,
            email,
            phone,
            balance
        }
        // console.log(newContact);
        this.props.addClient(newClient);
        this.props.history.push("/");

    }

    render() {
        const { firstName, lastName, email, phone, balance} = this.state;
        return (
            <div className = "w-80 h-72 m-auto mt-40 bg-green-400 rounded ">
                <form className = "p-2 ml-6" onSubmit = {this.onSubmit}>
                <div>
                    <label htmlFor = "firstName">firstName:</label><br/>
                    <input 
                    type = "text"
                    name = "firstName"
                    placeholder = "enter first name"
                    value = {firstName}
                    onChange = {this.onChange}
                    /> 
                </div>
                <div>
                    <label htmlFor = "lastName">firstName:</label><br/>
                    <input 
                    type = "text"
                    name = "lastName"
                    placeholder = "enter last name"
                    value = {lastName}
                    onChange = {this.onChange}
                    /> 
                </div>
                <div>
                    <label htmlFor = "firstName">email:</label><br/>
                    <input 
                    type = "email"
                    name = "email"
                    placeholder = "enter email"
                    value = {email}
                    onChange = {this.onChange}
                    /> 
                </div>
                <div>
                    <label htmlFor = "firstName">phone:</label><br/>
                    <input 
                    type = "text"
                    name = "phone"
                    placeholder = "enter phone"
                    value = {phone}
                    onChange = {this.onChange}
                    /> 
                </div>
                <div>
                    <label htmlFor = "firstName">balance:</label><br/>
                    <input 
                    type = "text"
                    name = "balance"
                    placeholder = "enter balance"
                    value = {balance}
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
export default connect(null, {addClient})(AddClient);