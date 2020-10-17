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
                        borderColor: '#85e5ff',
                        borderWidth: 5,
                        backgroundColor: '#6ab3fd29',
                        steppedLine: false,
                        bezierCurve: true,
                        pointRadius: '0',
                    }
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18
                    }
                },
                scales:{
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 18,
                            beginAtZero: true
                        },
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Height ( ft )',
                            fontColor: "white",
                            fontSize: 18    
                        }
                    }],
                    xAxes:[{
                        ticks: {
                            fontColor: "rgba(0, 0, 0, 0)",
                            fontSize: 14,
                            stepSize: 10,
                            beginAtZero: true
                        },
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Time ( min )',
                            fontColor: "white",
                            fontSize: 18
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
                    className={classes.canvas_style}
                    id="myChart"
                    ref={this.chartRef}                                       
                >                
                {/*  */}
                </canvas>
            </div>
        )
    }
}
export default LineChartDemo;