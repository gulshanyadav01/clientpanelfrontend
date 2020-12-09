import React, { Component } from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
// import {userProfile} from "../Store/Action/AuthAction"

class AppNavbar extends Component {
    // componentDidMount(){
    //     this.props.userProfile();
    //     console.log(this.props.user.email)

    // }
    render() {
       console.log(this.props.user.email);
        return (
            <div className = "h-12 bg-blue-300 flex justify-around">
            <div className = "ml-10 mr-10">
                <div className = "flex">
                    <div>
                        <h1>client panel</h1>
                    </div>
                    <div>
                        <h1>Dashboard</h1>
                    </div>
                </div>
                <div className = "flex">
                    <div>
                    setting
                    </div>
                    <div>
                    {this.props.user.name}
                    
                    </div>
                    <Link to = "/login">Login</Link>
                    <Link to ="/register">Register</Link>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        user: state.user.user,
        token: state.user.token
    }
}

export default connect(mapStateToProps)(AppNavbar);