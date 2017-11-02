import React, { Component } from 'react';

import './Week.css';
import Set from '../Set/Set';

class Week extends Component {

  render() {
    return (
      <div className="week">
        <div>
          <h2>Day 1: Squats</h2>
          <Set weekNumber={this.props.weekNumber} orm={this.props.squats} unit={this.props.unit} roundingFactor={this.props.roundingFactor} />
        </div>
        <hr />
        <div>
          <h2>Day 2: Bench Press</h2>
          <Set weekNumber={this.props.weekNumber} orm={this.props.bench} unit={this.props.unit} roundingFactor={this.props.roundingFactor} />
        </div>
        <hr />
        <div>
          <h2>Day 3: Deadlifts</h2>
          <Set weekNumber={this.props.weekNumber} orm={this.props.deadlift} unit={this.props.unit} roundingFactor={this.props.roundingFactor} />
        </div>
        <hr />
        <div>
          <h2>Day 4: Overhead Press</h2>
          <Set weekNumber={this.props.weekNumber} orm={this.props.ohp} unit={this.props.unit} roundingFactor={this.props.roundingFactor} />
        </div>
        <hr />
      </div>
    )
  }
}

export default Week;
