import React, { Component } from 'react';
import LineChartDemo from './LineChartDemo';
import moment from "moment";

// YYYY MM DD
const start_date = "20200809";
const end_date = "20200809";
const datum = "MLLW";
const station = "9447130";
const product = "water_level";

const chart_style = {
    minWidth: '20%',
    minHeight: '500px',
};
// function get_All_NOAA_DATA() {

//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };
//     }
//     componentDidMount(){
//     fetch(apicall)
//         .then(res => res.json())
//         .then(result => {console.log(result); this.setState({isLoaded: true, items: result.data});})
//         .catch(err => {
//             console.log(err)
//             this.setState({items: 'API Failed'})
//         })
//     }

//     render(){
//         const { error, isLoaded, items } = this.state;
//         if (error) {
//             return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//             return <div>Loading...</div>;
//         } else {
//             var data = items.map(item => parseFloat(item.v));
//             var label = items.map(item => item.t);
//             var mins = this.findMins(data);
//             var maxes = this.findMaxes(data);
            
//             return (   

//                 <div>                    
//                     <LineChartDemo style = {chart_style}
//                         labels={label}
//                         data={data}/>
//                 </div>
//             );
//         }
//     }
// }
// export default NOAA_API_DATA;
// class NOAA_API_DATA extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };
//     }
//     componentDidMount(){
//     fetch(apicall)
//         .then(res => res.json())
//         .then(result => {console.log(result); this.setState({isLoaded: true, items: result.data});})
//         .catch(err => {
//             console.log(err)
//             this.setState({items: 'API Failed'})
//         })
//     }
//     findMins(data){
//         var mins = []
//         for(var i = 1; i < data.length-1; i++){
//             if(data[i] < data[i-1] && data[i] < data[i+1]){
//                 mins.push(data[i]);
//             }
//         }
//         return mins;
//     }
//     findMaxes(data) {
//         var maxes = []
//         for (var i = 1; i < data.length - 1; i++) {
//             if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
//                 maxes.push(data[i]);
//             }
//         }
//         return maxes;
//     }

//     render(){
//         const { error, isLoaded, items } = this.state;
//         if (error) {
//             return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//             return <div>Loading...</div>;
//         } else {
//             var data = items.map(item => parseFloat(item.v));
//             var label = items.map(item => item.t);
//             var mins = this.findMins(data);
//             var maxes = this.findMaxes(data);
            
//             return (   

//                 <div>                    
//                     <LineChartDemo style = {chart_style}
//                         labels={label}
//                         data={data}/>
//                 </div>
//             );
//         }
//     }
// }
// export default NOAA_API_DATA;

class NOAA_API_DATA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };      
    }

    componentDidMount(){

    const st_date = moment().format("YYYYMMDD");
    const end_date = moment().format("YYYYMMDD");
    
    const apicall = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date="+st_date+"&end_date="+ end_date +"&station="+ station +"&product="+ product +"&units=english&time_zone=gmt&application=ports_screen&format=json&datum="+datum;
    fetch(apicall)
        .then(res => res.json())
        .then(result => {this.setState({isLoaded: true, items: result.data});})
        .catch(err => {
            console.log(err)
            this.setState({items: 'API Failed'})
        })
    const product2 = "wind";
    const apicall2 = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date="+st_date+"&end_date="+ end_date +"&station="+ station +"&product="+product2+"&units=english&time_zone=gmt&application=ports_screen&format=json&datum="+datum;
    fetch(apicall2)
        .then(res => res.json())
        .then( result => {console.log(result)})
        .catch(err => {
            console.log(err)
            this.setState({items: 'API Failed'})
        })
    }
    // findMins(data){
    //     var mins = []
    //     for(var i = 1; i < data.length-1; i++){
    //         if(data[i] < data[i-1] && data[i] < data[i+1]){
    //             mins.push(data[i]);
    //         }
    //     }
    //     return mins;
    // }
    // findMaxes(data) {
    //     var maxes = []
    //     for (var i = 1; i < data.length - 1; i++) {
    //         if (data[i] > data[i - 1] && data[i] > data[i + 1]) {
    //             maxes.push(data[i]);
    //         }
    //     }
    //     return maxes;
    // }
    render(){
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            var data = items.map(item => parseFloat(item.v));
            var label = items.map(item => item.t);
            
            return (
                <div>
                    <LineChartDemo style={chart_style}
                        labels={label}
                        data={data}/>
                </div>
            );
        }
    }
}
export default NOAA_API_DATA;
