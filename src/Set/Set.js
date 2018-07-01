import React, { Component } from 'react';

import { generateSets } from '../services/weights';

import Rep from './Rep/Rep.js';

class Set extends Component {
  render() { return (
    <ol className='set'>
    {generateSets(this.props.weekNumber).map((val, i) => {
      const repKey = `${this.props.weekNumber}/${this.props.day+1}/${i+1}`;

      return <Rep key={repKey} liftNumber={val} setNumber={i+1} {...this.props} />
    })}
    </ol>
  )}
}

export default Set;