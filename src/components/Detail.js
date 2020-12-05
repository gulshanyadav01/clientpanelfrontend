import React, { Component } from 'react'
import { connect } from "react-redux"
import { getClientById } from "../Store/Action/ClientAction"

class Detail extends Component {

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.getClientById(id);
        
    }
    render() {
        return (
            <div>
                <h1>{this.props.client.firstName}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        client:state.client
    }
}
export default connect(mapStateToProps, {getClientById})(Detail);