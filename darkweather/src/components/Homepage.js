import React, {Component} from "react";
import './Homepage.css';
import NOAA_API_DATA from './NOAA-API-Data';


class Homepage extends Component {
    render(){
        return (
            <div className="Home-Page bg-dark text-light hide-scrollbar">
                <h1 className="title">Wednesday September 19, 2020</h1>
                <div className="banner" id="banner"></div>                          
                <div className="chart-area">
                    <div className="row">
                        <div className="chart-container">
                             <NOAA_API_DATA />
                        </div> 
                    </div>
                </div>                          
            </div>
        );
    }
}
export default Homepage;