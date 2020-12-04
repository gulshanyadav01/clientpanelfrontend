import React, { Component } from 'react'
import { connect } from "react-redux"; 
import { getClients} from "../Store/Action/ClientAction"
import Client from "./Client"
// import axios from "axios";


class Clients extends Component {

    componentDidMount(){
        // const res = await axios.get("http://localhost:5000/client/getClients");
        // console.log(res.data.clients);
        getClients();
    }
   
    // onSubmit = async (e) => {
    //     e.preventDefault();
    //     this.props.getClients();

    //     // const res = await axios.get("http://localhost:5000/client/getClients"); 
    //     // console.log(res.data.clients);
    // }
    render() {
        
    
        
        return (
            <div>
                {this.props.client.map(client =>{
                    return(
                        <Client 
                        firstName = {client.firstName}/>
                    )
                })}
            </div>
        )
    }
}
// const mapStateToProps = (state) => { 
//     return {
//         client:state.Clients
//     }
// }


export default connect(null, {getClients})(Clients);