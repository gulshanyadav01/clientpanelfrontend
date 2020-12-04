import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from "react-redux"; 
import { deleteClientById } from "../Store/Action/ClientAction"
import { Redirect } from "react-router-dom"
 class Client extends Component {

     onDelete = (id) => { 
         this.props.deleteClientById(id);
        return <Redirect to = "/"/>

     }

    render() {
       const  {firstName, id} = this.props; 
        return (
            <div>
                <h1>{firstName} <DeleteIcon onClick = {() => this.onDelete(id)} /></h1>
                
            </div>
        )
    }
}

export default connect(null, {deleteClientById})(Client);