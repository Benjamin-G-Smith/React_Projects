import React, {Component} from "react";
import './Homepage.css';
import LineChartDemo from './LineChartDemo';
import NOAA_API_DATA from './NOAA-API-Data';

const center = {
    margin: 'auto',
    padding: '10px',
    minHeight: '300px',
    minWidth: '20%',
};

class Homepage extends Component {
    render(){
        return (
            <div className="Home-Page bg-dark text-light">                          
                    <div className="container">
                        <div className="row">
                            <div style={center}>
                                <NOAA_API_DATA />
                            </div> 
                        </div>
                    <h1 >Demo of Chart js</h1>


                    </div>
                          
            </div>
        );
    }
}
export default Homepage;