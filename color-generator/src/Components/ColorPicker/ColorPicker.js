import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './ColorPicker.css';


class ColorPicker extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      id: props.identity,
      isLocked : false,
      hexCode : '#ffff',
    }
  }
  // componentDidMount(){
  //   useEffect( () => {
  //     window.addEventListener("keypress", this.generateNewColor);
  //   });
  // }
  componentDidMount(){
    this.generateNewColor();
  }
  generateNewColor = () => {
      if(!this.state.isLocked){
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.setState({hexCode:randomColor});
      }
  }
  lockColor = () =>{
    let current_locked = this.state.isLocked;
    this.setState({isLocked: !current_locked});
  }


  render() {
    return (
    <div style={{backgroundColor: this.state.hexCode}} className="ColorPicker">
      ColorPicker Component
      <button onClick={this.generateNewColor}>
        Generate new Color
      </button>
      <button onClick={this.lockColor}>
          {this.state.isLocked ? "Locked" : "Lock"}
      </button>
      <h1>{this.state.hexCode}</h1>
    </div>
    );
  }
}

export default ColorPicker;
