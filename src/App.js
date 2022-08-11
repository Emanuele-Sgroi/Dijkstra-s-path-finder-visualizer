import React from 'react';
import './App.css';

import Visualizer from './pathfinderComponent/Visualizer';
import Navbar from './Navbar/Navbar';
import Tutorial from './Tutorial/Tutorial';
import About from './About/About';

function App() {

 
  return (
    <div className="App">
      <div className='container'>
      <Visualizer/>
      <About/>
      </div>
      
    </div>
  );
}

export default App;
