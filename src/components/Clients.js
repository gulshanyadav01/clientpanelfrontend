import React, { Component } from 'react'
import { connect } from "react-redux"; 
import { getClients} from "../Store/Action/ClientAction"
import Client from "./Client"
// import axios from "axios";
import Sidebar from "./Sidebar"
import { Link } from "react-router-dom"


class Clients extends Component {
    componentDidMount(){
        this.props.getClients();
    }

   
   
    render() {
        // const { client } = this.props.client;
    
        
        return (
            <div className = "ml-8 mr-8">
            <div>
                <Sidebar/>
            </div>

            
            <div className = "w-2/3">
            <table className = "w-full shadow">
            <tr>
                <th className = "bg-blue-100 text-left px-6 py-2 border">name</th>
                <th className = "bg-blue-100 text-left px-6 py-2 border">email</th>
                <th className = "bg-blue-100 text-left px-6 py-2 border">phone</th>
                <th className = " bg-blue-100 text-left px-6 py-2 border">balance</th>
            </tr>
            
                {this.props.client.map(client =>{
                    return(
                       <>
                       <tr>
                           <td className = "border font-bold px-6 py-2">{client.firstName}  {client.lastName}</td>
                           <td className = "border font-bold px-6 py-2"> {client.email}</td>
                           <td className = "border font-bold px-6 py-2"> {client.phone}</td>
                           <td className = "border font-bold px-6 py-2"> {client.balance}</td>
                           <Link to = "/detail"> <td className = " font-bold px-6 py-2">Details</td></Link> 

                       </tr>
                       </>
                    )
                })}

            

            </table>
            {/* <h1 onClick = {this.onSubmit}>click </h1> */}
            
                
                
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => { 
    return {
        client: state.clients
    }
}


export default connect(mapStateToProps,{getClients})(Clients);