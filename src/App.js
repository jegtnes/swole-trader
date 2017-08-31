import React, { Component } from 'react';

import LocalForage from 'localforage';

import 'normalize.css';

import Calculator from './Calculator/Calculator.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    LocalForage.getItem('data').then((val) => {
      if(val) {
        this.setState(val);
      }
    }).catch((err) => {
      console.log('app constructor error', err);
    });
  }

  render() {
    return (
      <main>
        <h1>Swole Trader</h1>
        <Calculator {...this.state} />
      </main>
    );
  }
}

export default App;
