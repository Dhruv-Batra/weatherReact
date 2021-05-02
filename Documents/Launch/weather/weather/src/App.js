import logo from './logo.svg';
import './App.css';
import Hourly from './Hourly';
import Current from './Current';
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";

function App() {

  const [showHourly, setShowHourly] = useState(false)
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Charlottesville Weather</h2>
        <div class="grid-container">
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
        </div>
      </header>
      <div class="App-body">
      <br></br>
      
      {showHourly ? <div><Button
          onClick={() => {setShowHourly(true)}}
          variant="contained"
          color="primary"
      >
        Current Weather
      </Button><Current/></div> : 
      <Button
          onClick={() => {setShowHourly(true)}}
          variant="contained"
          color="primary"
      >
        Current Weather
      </Button>}

      <Hourly/>
      
      </div>  
    </div>
  );
}

export default App;
