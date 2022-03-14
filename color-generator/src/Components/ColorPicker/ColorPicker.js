import React from 'react';
import PropTypes from 'prop-types';
import './ColorPicker.css';

// const ColorPicker = () => (
//   <div className="ColorPicker">
//     ColorPicker Component
//   </div>
// );

// ColorPicker.propTypes = {};

// ColorPicker.defaultProps = {};

class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.identity,
      isLocked : false,
      hexCode : '#ffff',
    }
  }
  generateNewColor = function(){
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      document.getElementById('color_container').style.backgroundColor = randomColor;

  }
  lockColor(){
    let current_locked = this.state.isLocked;
    this.setState({isLocked: !current_locked});

  }

  render() {
    return (
    <div id="color_container" className="ColorPicker">
      ColorPicker Component
      <button onClick={this.generateNewColor}>
        Generate new Color
      </button>
    </div>
    );
  }
}

export default ColorPicker;
