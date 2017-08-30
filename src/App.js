import React, { Component } from 'react';

import Calculator from './Calculator/Calculator.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1>Swole Trader</h1>
        <Calculator />
      </main>
    );
  }
}

export default App;
