import React, { Component } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from "react-router-dom"
class Sidebar extends Component {
    render() {
        return (
            <div className = "flex ">
                <div className = "w-2/3">
                    <h1>hello</h1>
                </div>
                <div>
                <Link to = "/addclient"> <AddCircleOutlineIcon/> </Link>
                </div>
            </div>
        )
    }
}
export default  Sidebar; 