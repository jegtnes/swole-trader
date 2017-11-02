import React, { Component } from 'react';

import { generateRepIntensity, generateSets } from '../services/weights';
import { round } from '../services/round';

class Set extends Component {
  render() { return (
    <ol>
    {generateSets(this.props.weekNumber).map((val, i) => {
      return <li key={i}>
        <span className="lifts">{val}&nbsp;</span>
        <span className="weight">
          {round(this.props.orm * generateRepIntensity(this.props.weekNumber, i+1), this.props.roundingFactor ? this.props.roundingFactor : 2.5)}
          {this.props.unit}
        </span>
      </li>
    })}
    </ol>
  )}
}

export default Set;