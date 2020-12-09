import React, { useState } from 'react'
import {connect} from "react-redux";
import {registerUser} from "../../Store/Action/AuthAction"
import {Redirect, useHistory} from "react-router-dom";


const Register = ({registerUser}) => {
    const history = useHistory();
    const [formdata, setFormData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChange = (e) => {
        setFormData({...formdata, [e.target.name]: e.target.value});

    
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password} = formdata;
        console.log(`${name} ${email} ${password}`)
        registerUser({name, email, password});
        history.push("/login");


    }

    return(
<div className = "w-80 h-72 m-auto mt-40 bg-green-400 rounded ">
            <form className = "p-2 ml-6" onSubmit = {onSubmit}>
            <div>
                <label htmlFor = "Name">Name:</label><br/>
                <input 
                type = "text"
                name = "name"
                placeholder = "enter  name"
                value = {formdata.name}
                onChange = {onChange}
                /> 
            </div>
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


export default connect(null,{registerUser} )(Register);












































// const  Register = () =>  {
//     state = {
//         name:"",
//         email:"",
//         password:"",
//         password2:""
//     }
//     onChange = (e) => {
//         this.setState({[e.target.name]: e.target.value});
//     }

//     onSubmit = (e) => {
//         e.preventDefault(); 
//         const { name , email, password} = this.state; 
//         // console.log(this.state);
//         const newContact = {
//             name, 
//             email,
//             password
//         }
//         this.props.register(newContact);
//         return <Redirect to ="/"/>

//     }
//     render() {
//         const {name, email, password} = this.state;

//         return (
            
//         )
//     }
// }
