import logo from './logo.svg';
import ColorPicker from './Components/ColorPicker/ColorPicker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ColorPicker identity='color_a'></ColorPicker>
        <ColorPicker identity='color_b'></ColorPicker>
        <ColorPicker identity='color_c'></ColorPicker>
      </header>
    </div>
  );
}

export default App;
