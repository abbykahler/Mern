
import './App.css';
import { Router } from "@reach/router";
import React from 'react';
import Home from './components/Home';
import Number from './components/Number';
import Color from './components/Color';



function App() {
  return (
    <div>
      <Router>
        <Home path="/home"/>
        <Number path=":number"/>
        <Color path=":word/:backgroundColor/:color"/>
      </Router>
    </div>
  );
}

export default App;
