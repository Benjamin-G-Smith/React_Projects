import React, { Component } from 'react';

import LineChartDemo from './LineChartDemo';

const start_date = "20200808";
const end_date = "20200808";
const datum = "MLLW";
const station = "9447130";

const apicall = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date="+start_date+"&end_date="+ end_date +"&station="+ station +"&product=water_level&units=english&time_zone=gmt&application=ports_screen&format=json&datum="+datum;



class NOAA_API_DATA extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount(){
    fetch(apicall)
        .then(res => res.json())
        .then(result => {console.log(result); this.setState({isLoaded: true, items: result.data});})
        .catch(err => {
            console.log(err)
            this.setState({items: 'API Failed'})
        })
    }

    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            var data = items.map(item => parseInt( item.v,10));
            var label = items.map(item => item.t);
            console.log(data);
            return (
               
                <div>                    
                    <LineChartDemo
                        labels={label}
                        data={data}
                    />

                </div>
            );
        }
        
    }

}
export default NOAA_API_DATA;