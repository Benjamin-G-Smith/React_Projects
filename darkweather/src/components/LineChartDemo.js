import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineChartDemo.module.css";

class LineChartDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }
    
    chartRef = React.createRef();
    apicall = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=20200808&end_date=20200808&station=9447130&product=water_level&units=english&time_zone=gmt&application=ports_screen&format=json&datum=MLLW";
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: null,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
           
        });

        fetch(this.apicall)
        .then(res => res.json())
        .then((result) => {this.setState({isLoaded: true,items: result.items});})
        .catch(error => this.setState({isLoaded: true,error}));
    }
    render() {

        const { items } = this.state;
        
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                    data = {this.items}
                />
            </div>
        )
    }
}
export default LineChartDemo;