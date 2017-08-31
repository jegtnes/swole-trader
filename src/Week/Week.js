import React, { Component } from 'react';

class Week extends Component {

  constructor() {
    super();
    this.modifier = this.modifier.bind(this);
    this.round = this.round.bind(this);
  }


  round(value) {
    return (Math.ceil(value / 2.5) * 2.5);
  }

  modifier(weekNumber, setNumber) {
    var base = 40;
    var num = base;
    switch (weekNumber) {
      case 1:
      case 2:
      case 3:

        num += (weekNumber * 5) -5;

        if (setNumber >= 2) num += 10;
        if (setNumber >= 3) num += 10;
        if (setNumber >= 4) num += 5;
        if (setNumber >= 5) num += 10;
        if (setNumber === 6) num += 10;
        return num / 100;

      case 4:
        if (setNumber >= 2) num += 10;
        if (setNumber >= 3) num += 10;
        return num / 100;

      default:
        break;
    }
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
              {val}&nbsp;
              { this.round(this.props.squats * this.modifier(this.props.weekNumber, i+1)) }kg
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
              {val}&nbsp;
              {this.round(this.props.bench * this.modifier(this.props.weekNumber, i+1)) }kg
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
              {val}&nbsp;
              {this.round(this.props.deadlift * this.modifier(this.props.weekNumber, i+1)) }kg
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
              {val}&nbsp;
              {this.round(this.props.ohp * this.modifier(this.props.weekNumber, i+1)) }kg
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
