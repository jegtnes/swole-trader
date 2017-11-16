import React, { Component } from 'react';

import { generateRepIntensity } from '../../services/weights';
import { round } from '../../services/round';

class Rep extends Component {
  recursive(weights, totalWeight, previousResult) {
    weights = weights.reverse();
    if (totalWeight < 0) {
      // console.log(totalWeight, previousResult);
      console.log('feck', previousResult, totalWeight);
      return previousResult;
    }
    if (totalWeight === 0) {
      return previousResult;
    }

    var biggestWeight = 0;

    // for(var i = weights.length - 1; i >= 0; i--) {
    //   if (weights[i] < totalWeight) {
    //     console.info(biggestWeight, weights[i]);
    //     biggestWeight = weights[i];
    //   }
    // }

    console.log('loop start');
    for(var i = 0; i < weights.length; i++) {
      console.info(biggestWeight, weights[i]);
      if (weights[i] <= totalWeight) {
        biggestWeight = weights[i];
      }
    }
    console.log('loop end');

    if (biggestWeight === 0) return previousResult;

    previousResult.push(biggestWeight);

    console.error('biggest weight', biggestWeight, 'total', totalWeight, 'total weight minus biggest weight', totalWeight - biggestWeight);

    return this.recursive(weights.reverse(), totalWeight - biggestWeight, previousResult);

  }

  calculateWeights(weight, totalWeight, previousResult) {
    console.warn(totalWeight);
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
      <li>
        <span className="lifts">{this.props.liftNumber}&nbsp;</span>
        <span className="weight">
          {weight}
          {this.props.unit}
        </span>
        <span className="weight-distribution">{
          this.calculateWeights(
              [1.25, 2.5, 5, 10, 15, 20, 25, 30].reverse(),
              parseFloat(((weight - 20) / 2)),
              []
          )
        }/side</span>
      </li>
    )
  }
}

export default Rep;