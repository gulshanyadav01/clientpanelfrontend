import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from "react-redux"; 


 class Client extends Component {

    

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