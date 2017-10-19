import React, { Component } from 'react';

import { generateRepIntensity } from '../services/weights';
import { round } from '../services/round';

import './Week.css';

class Week extends Component {

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
        <div>
          <h2>Day 1: Squats</h2>
          <ol>
          {numbers.map((val, i) => {
            return <li key={i}>
              <span className="lifts">{val}&nbsp;</span>
              <span className="weight">{ round(this.props.squats * generateRepIntensity(this.props.weekNumber, i+1)) }kg</span>
            </li>
          })}
          </ol>
        </div>
        <hr />
        <div>
          <h2>Day 2: Bench Press</h2>
          <ol>
          {numbers.map((val, i) => {
            return <li key={i}>
              <span className="lifts">{val}&nbsp;</span>
              <span className="weight">{round(this.props.bench * generateRepIntensity(this.props.weekNumber, i+1)) }kg</span>
            </li>
          })}
          </ol>
        </div>
        <hr />
        <div>
          <h2>Day 3: Deadlifts</h2>
          <ol>
          {numbers.map((val, i) => {
            return <li key={i}>
              <span className="lifts">{val}&nbsp;</span>
              <span className="weight">{round(this.props.deadlift * generateRepIntensity(this.props.weekNumber, i+1)) }kg</span>
            </li>
          })}
          </ol>
        </div>
        <hr />
        <div>
          <h2>Day 4: Overhead Press</h2>
          <ol>
          {numbers.map((val, i) => {
            return <li key={i}>
              <span className="lifts">{val}&nbsp;</span>
              <span className="weight">{round(this.props.ohp * generateRepIntensity(this.props.weekNumber, i+1)) }kg</span>
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
