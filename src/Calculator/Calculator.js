import React, { Component } from 'react';

import Week from '../Week/Week';

import './Calculator.css';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oneRepMax: {
        bench: false,
        deadlift: false,
        squats: false,
        ohp: false,
      },
      submitted: false,
    }

    this.updateBench = this.updateBench.bind(this);
    this.updateSquats = this.updateSquats.bind(this);
    this.updateDeadlift = this.updateDeadlift.bind(this);
    this.updateOhp = this.updateOhp.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateBench(event) {
    this.setState({
      oneRepMax: {
        ...this.state.oneRepMax,
        bench: event.target.value,
      }
    });
  };

  updateSquats(event) {
    this.setState({
      oneRepMax: {
        ...this.state.oneRepMax,
        squats: event.target.value,
      }
    });
  };

  updateDeadlift(event) {
    this.setState({
      oneRepMax: {
        ...this.state.oneRepMax,
        deadlift: event.target.value,
      }
    });
  };

  updateOhp(event) {
    this.setState({
      oneRepMax: {
        ...this.state.oneRepMax,
        ohp: event.target.value,
      }
    });
  };

  updateState() {
    this.setState({
      submitted: true,
    })
    console.log(this.state);
  };

  render() {
    return (
      <div className="calculator">
        { !this.state.submitted ?
        <section>
          <label>
            <span>Squats 1RM</span>
            <input onChange={this.updateSquats} min="1" max="300" type="number" id="orm-squat" />
          </label>

          <label>
            <span>Bench Press 1RM</span>
            <input onChange={this.updateBench} min="1" max="300" type="number" id="orm-deadlift" />
          </label>

          <label>
            <span>Deadlift 1RM</span>
            <input onChange={this.updateDeadlift} min="1" max="300" type="number" id="orm-bench" />
          </label>

          <label>
            <span>Overhead Press 1RM</span>
            <input onChange={this.updateOhp} min="1" max="300" type="number" id="orm-ohp" />
          </label>

          <button onClick={this.updateState}>
            HIT ME WITH YOUR RHYTHM STICK. HIT ME, HIT ME
          </button>
        </section> :
        <section>
          <Week weekNumber={1} orm={this.state.oneRepMax} />
          <Week weekNumber={2} orm={this.state.oneRepMax} />
          <Week weekNumber={3} orm={this.state.oneRepMax} />
          <Week weekNumber={4} orm={this.state.oneRepMax} />
        </section>
        }
      </div>
    );
  }
}

export default Calculator;
