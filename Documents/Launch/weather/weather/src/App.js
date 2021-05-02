import logo from './logo.svg';
import './App.css';
import Input from './Input';

import React, { useEffect, useState } from "react";

function App() {
  
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

      <Input/>

      </div>  
    </div>
  );
}

export default App;