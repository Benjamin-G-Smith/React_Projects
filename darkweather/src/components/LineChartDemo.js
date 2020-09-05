import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineChartDemo.module.css";

class LineChartDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            data: props.data,
            labels: props.labels,
        };
    }

   
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: this.state.labels,
                datasets:[
                    {
                        label: "Water Level",
                        data: this.state.data,
                    }
                ]

            },
            options: {
                bezierCurve: true,
                steppedLine: false,
                elements: {
                    line: {
                        tension: 0,
                    },
                },

                scales: {
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }]
                }

            }
        });

    }
    render() {        
        
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                    
                />
            </div>
        )
    }
}
export default LineChartDemo;