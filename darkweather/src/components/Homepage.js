import React, {Component} from "react";
import moment from "moment";
import NOAA_API_DATA from './NOAA-API-Data';
import './Homepage.css';


class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: null,
        };
    }
    componentDidMount(){
        this.setState({date: moment().format('MMMM Do YYYY')})
    }
    render(){
        return (
            <div className="Home-Page bg-dark text-light hide-scrollbar">
                <h1 className="title">{this.state.date}</h1>
                <div className="banner" id="banner"></div>                          
                <div className="chart-area">
                    <div className="row">
                        <div className="chart-container">                        
                             <NOAA_API_DATA />
                        </div>
                        <div className="col-12">
                            <h1>High Tide</h1>      
                        </div> 
                    </div>
                </div>                          
            </div>
        );
    }
}
export default Homepage;