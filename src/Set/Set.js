import React, { Component } from 'react';

import classnames from 'classnames';

import { generateSets } from '../services/weights';

import Rep from './Rep/Rep.js';

class Set extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(argument) {
    this.props.handleRepClick(argument);
  }

  render() {
    const sets = generateSets(this.props.weekNumber);

    return (
      <ol className='set'>

      {sets.map((val, i) => {
        const repKey = `${this.props.weekNumber}/${this.props.day+1}/${i+1}`;
        const completed = this.props.completedSets.includes(repKey);

        const classes = classnames(
          'rep',
          {
            'rep--completed': completed,
          },
        );

        return (
          <li className={classes} key={repKey} onClick={() => this.handleClick(repKey)}>
            <Rep
              completed={completed}
              key={repKey}
              liftNumber={val}
              setNumber={i+1}
              {...this.props}
            />
          </li>
        );
      })}
    </ol>
  )}
}

export default Set;
