import React from 'react';
import './App.css';

import Visualizer from './pathfinderComponent/Visualizer';
import Navbar from './Navbar/Navbar';
import Tutorial from './Tutorial/Tutorial';
import About from './About/About';

function App() {

  let Component 
  switch (window.location.pathname) {
    case "/visualizer":
      Component = <Visualizer/>;
      break;
    case "/tutorial":
      Component = <Tutorial/>;
      break;
    case "/about":
      Component = <About/>;
      break
    default:
      Component = <Visualizer/>
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
      {Component}
      </div>
      
    </div>
  );
}

export default App;
