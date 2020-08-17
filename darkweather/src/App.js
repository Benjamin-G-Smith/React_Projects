import React from 'react';
//import logo from './logo.svg';
import TopNav from './components/TopNav';
import Homepage from './components/Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//const Message = props => <div><h1>{props.msg}</h1></div>;
const Spacer = {
  height: '10px',
  margin: '10px'
};

function App() {
  return (
    <div className="App">
      <TopNav/>
      <div style={Spacer}></div>
      <Homepage/>

    </div>
  );
}

export default App;

