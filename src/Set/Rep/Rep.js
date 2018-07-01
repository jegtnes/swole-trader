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

    return (
      <li className='rep'>
        <span className='rep__item rep__item--lifts'>{this.props.liftNumber}&nbsp;</span>
        <span className='rep__item rep__item--unit'>
          {weight}
          {this.props.unit}
        </span>
        <span className='rep__item rep__item--weight-distribution'>{
          this.props.unit === 'kg' ? this.calculateWeights(
            kgWeightSet,
            parseFloat(((weight - kgBarWeight) / 2)),
            []
          ) : this.calculateWeights(
            lbWeightSet,
            parseFloat(((weight - lbBarWeight) / 2)),
            []
          )
        }/side</span>
      </li>
    )
  }
}

export default Rep;