import React, { Component } from 'react'

 class Client extends Component {
    render() {
       const  {firstName} = this.props; 
        return (
            <div>
                <h1>{firstName}</h1>
            </div>
        )
    }
}
export default Client