import React, {Component} from "react";
import './Homepage.css';
import LineChartDemo from './LineChartDemo';

const center = {
    margin: 'auto',
    padding: '10px'
};

class Homepage extends Component {
    render(){
        return (
            <div className="Home-Page bg-dark text-light">
                    <h1 >Demo of Chart js</h1>       
                    <div className="container">
                        <div className="row">
                        <div style={center}>
                            <LineChartDemo  />   
                            </div>
                        

                        </div>

                    </div>
                          
            </div>
        );
    }
}
export default Homepage;