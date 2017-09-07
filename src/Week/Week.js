import React, { Component } from 'react';

import { percentageLift } from '../services/weights';

import './Week.css';

class Week extends Component {

  constructor() {
    super();
    this.round = this.round.bind(this);
  }

  round(value) {
    return (Math.ceil(value / 2.5) * 2.5);
  }

  render() {
    let numbers = ["5x", "5x"];
    if (this.props.weekNumber === 4) {
      numbers = numbers.concat([], ["5x"]);
    } else {
      numbers = numbers.concat([], ["3x"]);

      if (this.props.weekNumber === 1) {
        numbers = numbers.concat([], ["5x", "5x", "5+"]);
      } else if (this.props.weekNumber === 2) {
        numbers = numbers.concat([], ["3x", "3x", "3+"]);
      } else if (this.props.weekNumber === 3) {
        numbers = numbers.concat([], ["5x", "3x", "1+"]);
      }
    }

    return (
      <div className="week">
        <h2>Hi this is week {this.props.weekNumber}.</h2>
        <div>
          <h3>Day 1: Squats (1RM: {this.props.squats})</h3>
          <ol>
          {numbers.map((val, i) => {
            return <li key={i}>
              <span className="lifts">{val}&nbsp;</span>
              <span className="weight">{ this.round(this.props.squats * percentageLift(this.props.weekNumber, i+1)) }kg</span>
            </li>
          })}
          </ol>
        </div>
        <hr />
        <div>
          <h3>Day 2: Bench Press (1RM: {this.props.bench})</h3>
          <ol>
          {numbers.map((val, i) => {
            return <li key={i}>
              <span className="lifts">{val}&nbsp;</span>
              <span className="weight">{this.round(this.props.bench * percentageLift(this.props.weekNumber, i+1)) }kg</span>
            </li>
          })}
          </ol>
        </div>
        <hr />
        <div>
          <h3>Day 3: Deadlifts (1RM: {this.props.deadlift})</h3>
          <ol>
          {numbers.map((val, i) => {
            return <li key={i}>
              <span className="lifts">{val}&nbsp;</span>
              <span className="weight">{this.round(this.props.deadlift * percentageLift(this.props.weekNumber, i+1)) }kg</span>
            </li>
          })}
          </ol>
        </div>
        <hr />
        <div>
          <h3>Day 4: Overhead Press (1RM: {this.props.ohp})</h3>
          <ol>
          {numbers.map((val, i) => {
            return <li key={i}>
              <span className="lifts">{val}&nbsp;</span>
              <span className="weight">{this.round(this.props.ohp * percentageLift(this.props.weekNumber, i+1)) }kg</span>
            </li>
          })}
          </ol>
        </div>
        <hr />
      </div>
    )
  }
}

export default Week;
