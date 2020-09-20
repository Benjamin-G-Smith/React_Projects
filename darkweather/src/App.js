import React from 'react';
import TopNav from './components/TopNav';
import Homepage from './components/Homepage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Homepage/>
    </div>
  );
}
export default App;

