import React, { Component } from "react";

const AppName = 'DarkWeather';
class TopNav extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{AppName}</a>
            </nav>
        );
    }

}

export default TopNav;