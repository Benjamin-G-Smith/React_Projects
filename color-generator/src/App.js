import logo from './logo.svg';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <div className="App-Container">
          <ColorPicker></ColorPicker>
          <ColorPicker></ColorPicker>
          <ColorPicker></ColorPicker>
          <ColorPicker></ColorPicker>
          <ColorPicker></ColorPicker>
        </div>
      </header>
      

    </div>
  );
}

export default App;
