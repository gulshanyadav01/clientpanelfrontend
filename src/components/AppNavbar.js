import React, { Component } from 'react'

class AppNavbar extends Component {
    render() {
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
                    emial
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default AppNavbar;