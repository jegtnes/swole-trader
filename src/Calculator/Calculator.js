import React, { Component } from 'react';

import Week from '../Week/Week';

import './Calculator.css';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bench1rm: false,
      deadlift1rm: false,
      squat1rm: false,
      ohp1rm: false,
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
      bench1rm: event.target.value,
    });
  };

  updateSquats(event) {
    this.setState({
      squats1rm: event.target.value,
    });
  };

  updateDeadlift(event) {
    this.setState({
      deadlift1rm: event.target.value,
    });
  };

  updateOhp(event) {
    this.setState({
      ohp1rm: event.target.value,
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
            <span>Bench Press 1RM</span>
            <input onChange={this.updateBench} min="1" max="300" type="number" id="orm-deadlift" />
          </label>

          <label>
            <span>Squats 1RM</span>
            <input onChange={this.updateSquats} min="1" max="300" type="number" id="orm-squat" />
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
          <Week weekNumber="1" />
          <Week weekNumber="2" />
          <Week weekNumber="3" />
          <Week weekNumber="4" />
        </section>
        }
      </div>
    );
  }
}

export default Calculator;
