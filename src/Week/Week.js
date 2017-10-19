import React, { Component } from 'react';

import { generateRepIntensity, generateSets } from '../services/weights';
import { round } from '../services/round';

import './Week.css';

class Week extends Component {

  render() {

    return (
      <div className="week">
        <div>
          <h2>Day 1: Squats</h2>
          <ol>
          {generateSets(this.props.weekNumber).map((val, i) => {
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
          {generateSets(this.props.weekNumber).map((val, i) => {
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
          {generateSets(this.props.weekNumber).map((val, i) => {
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
          {generateSets(this.props.weekNumber).map((val, i) => {
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
