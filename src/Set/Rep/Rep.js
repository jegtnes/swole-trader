import React, { Component } from 'react';

import { generateRepIntensity, generateWeightDistribution } from '../../services/weights';
import { round } from '../../services/round';

import './Rep.css';

class Rep extends Component {
  render() {
    const repIntensity = generateRepIntensity(
      this.props.weekNumber,
      this.props.setNumber,
    );
    const weight = round(this.props.orm * repIntensity);

    const weightSet = this.props.unit === 'kg' ?
      [1.25, 2.5, 5, 10, 15, 20, 25, 30] :
      [1.25, 2.5, 5, 10, 25, 35, 45];

    const barWeight = this.props.unit === 'kg' ? 20 : 45;

    const weightsDistribution = generateWeightDistribution(
      weightSet,
      parseFloat(((weight - barWeight) / 2)),
      []
    );

    return (
      <li className='rep'>
        <span className='rep__item rep__item--lifts'>{this.props.liftNumber}&nbsp;</span>
        <span className='rep__item rep__item--unit'>
          {weight}
          {this.props.unit}
        </span>
        <span className='rep__item rep__item--weight-distribution'>
          {weightsDistribution.map((item, i) => {
            // determine the percentile of how physically large the weight is going to be
            // for styling purposes
            const relativeWeightSize = (weightSet.indexOf(item) / weightSet.length) * 100;

            let className = 'rep__item--weight-distribution__weight ';
            if (relativeWeightSize <= 25) {
              className += 'rep__item--weight-distribution__weight--small'
            } else if (relativeWeightSize <= 50) {
              className += 'rep__item--weight-distribution__weight--medium'
            } else {
              className += 'rep__item--weight-distribution__weight--large'
            }

            return <span key={i} className={className}>{item}</span>;
          })}
        </span>
      </li>
    )
  }
}

export default Rep;