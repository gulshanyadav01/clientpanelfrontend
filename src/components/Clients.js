import React, { Component } from 'react'
import { connect } from "react-redux"; 
import { getClients} from "../Store/Action/ClientAction"
import Client from "./Client"
// import axios from "axios";


class Clients extends Component {
    componentDidMount(){
        this.props.getClients();
    }

   
   
    render() {
        // const { client } = this.props.client;
    
        
        return (
            <div>
            {/* <h1 onClick = {this.onSubmit}>click </h1> */}
            
                {this.props.client.map(client =>{
                    return(
                        <Client 
                        key = {client._id}
                        firstName = {client.firstName}
                        id = {client._id}
                        />
                    )
                })}
                
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