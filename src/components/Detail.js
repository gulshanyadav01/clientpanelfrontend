import React, { Component } from 'react'
import { connect } from "react-redux"
import { getClientById } from "../Store/Action/ClientAction"
import {Link} from "react-router-dom"
import { deleteClientById } from "../Store/Action/ClientAction"

class Detail extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getClientById(id);
        
    }
    onDeleteHandler = (id) => { 
        console.log("hi i am deleted");
        this.props.onDelete(id);
        this.props.history.push("/");
    }
    render() {
        const {client } = this.props;
        return (
            <div className = "ml-8 mr-8 flex justify-around">
            <div className = "w-2/3">
            <div className = "w-80 h-64 mt-10 m-autobg-blue-400 rounded-xl shadow">
                <div >
                <div className = "bg-gray-200 rounded-t-xl text-center">
                    <h1>CLIENT DETAILS</h1>
                </div>
                <div>
                    <h1>NAME:{client.firstName} {client.lastName} <span className = "ml-40">Balance: ${client.balance}</span></h1>
                </div>
                <div>
                    <h1>EMAIL:{client.email}</h1>
                </div>
                <div>
                    <h1>PHONE:{ client.phone}</h1>
                </div>
                </div>
            </div>
            </div>
            <div className = "mt-10 w-1/3">
                <button ><Link className = "px-2 py-1 rounded-l shadow bg-green-400" to ="/">Edit</Link><button onClick = {()=>this.onDeleteHandler(client._id)} className = "px-2 py-0.5 rounded-r shadow bg-red-400">Delete</button></button>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        client:state.client
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    onDelete:(id) => dispatch(deleteClientById(id)),
    getClientById: (id) => dispatch(getClientById(id))
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Detail);