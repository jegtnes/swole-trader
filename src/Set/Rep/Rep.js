import React, { Component } from 'react';

import { generateRepIntensity } from '../../services/weights';
import { round } from '../../services/round';

import './Rep.css';

const kgWeightSet = [1.25, 2.5, 5, 10, 15, 20, 25, 30];
const kgBarWeight = 20;

const lbWeightSet = [1.25, 2.5, 5, 10, 25, 35, 45];
const lbBarWeight = 45;

class Rep extends Component {
  recursive(weights, totalWeight, previousResult) {
    if (totalWeight <= 0) {
      return previousResult;
    }

    var biggestWeight = 0;

    for(var i = 0; i < weights.length; i++) {
      if (weights[i] <= totalWeight) {
        biggestWeight = weights[i];
      }
    }

    if (biggestWeight === 0) return previousResult;

    previousResult.push(biggestWeight);

    return this.recursive(weights, totalWeight - biggestWeight, previousResult);
  }

  calculateWeights(weight, totalWeight, previousResult) {
    var weights = this.recursive(weight, totalWeight, previousResult);
    weights = weights.join('+');
    return weights;
  }

  render() {
    const weight = round(
      this.props.orm * generateRepIntensity(
        this.props.weekNumber,
        this.props.setNumber,
        this.props.roundingFactor ? this.props.roundingFactor : 2.5,
      )
    );

    let weightsDistribution = [];

    if (this.props.unit === 'kg') {
      weightsDistribution = this.recursive(
        kgWeightSet,
        parseFloat(((weight - kgBarWeight) / 2)),
        []
      )
    } else if (this.props.unit === 'lbs') {
      weightsDistribution = this.recursive(
        lbWeightSet,
        parseFloat(((weight - lbBarWeight) / 2)),
        []
      )
    }
    console.log(weightsDistribution);

    return (
      <li className='rep'>
        <span className='rep__item rep__item--lifts'>{this.props.liftNumber}&nbsp;</span>
        <span className='rep__item rep__item--unit'>
          {weight}
          {this.props.unit}
        </span>
        <span className='rep__item rep__item--weight-distribution'>
          {weightsDistribution.map((item) => {
            return <span className='rep__item--weight-distribution__weight'>{item}</span>;
          })}
        </span>
      </li>
    )
  }
}

export default Rep;