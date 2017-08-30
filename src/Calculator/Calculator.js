import React, { Component } from 'react';

import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <form>
        <div>
          <label for="orm-deadlift">Bench Press ORM 💪</label>
          <input type="number" id="orm-deadlift" />
        </div>
        <div>
          <label for="orm-squat">Squats ORM 💪</label>
          <input type="number" id="orm-squat" />
        </div>
        <div>
          <label for="orm-deadlift">Deadlift ORM 💪</label>
          <input type="number" id="orm-deadlift" />
        </div>
        <div>
          <label for="orm-ohp">Overhead Press ORM 💪</label>
          <input type="number" id="orm-ohp" />
        </div>
      </form>
    );
  }
}

export default Calculator;
