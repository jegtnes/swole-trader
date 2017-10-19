import React, { Component } from 'react';

import './Week.css';
import Set from '../Set/Set';

class Week extends Component {

  render() {

    return (
      <div className="week">
        <div>
          <h2>Day 1: Squats</h2>
          <Set weekNumber={this.props.weekNumber} orm={this.props.squats} />
        </div>
        <hr />
        <div>
          <h2>Day 2: Bench Press</h2>
          <Set weekNumber={this.props.weekNumber} orm={this.props.bench} />
        </div>
        <hr />
        <div>
          <h2>Day 3: Deadlifts</h2>
          <Set weekNumber={this.props.weekNumber} orm={this.props.deadlift} />
        </div>
        <hr />
        <div>
          <h2>Day 4: Overhead Press</h2>
          <ol>
          <Set weekNumber={this.props.weekNumber} orm={this.props.ohp} />
          </ol>
        </div>
        <hr />
      </div>
    )
  }
}

export default Week;
