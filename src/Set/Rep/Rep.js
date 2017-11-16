import React, { Component } from 'react';

import { generateRepIntensity } from '../../services/weights';
import { round } from '../../services/round';

class Rep extends Component {
  recursive(weights, totalWeight, previousResult) {
    if (totalWeight < 0) {
      return previousResult;
    }
    if (totalWeight === 0) {
      console.log(previousResult)
      return previousResult;
    }
    if (weights[0] < totalWeight) {
      previousResult.push(weights[0]);
      return this.recursive(weights, totalWeight - weights[0], previousResult);
    } else {
      var biggestWeight = 0;

      for(var i = weights.length; i > -1; i--) {
        if (weights[i] < totalWeight) {
          biggestWeight = weights[i-1];
        }
      }

      previousResult.push(biggestWeight);

      return this.recursive(weights, totalWeight - biggestWeight, previousResult);
    }
  }

  calculateWeights(weight, totalWeight, previousResult) {
    var weights = this.recursive(weight, totalWeight, previousResult);
    console.log(weights);
    weights = weights.join(' + ');
    console.log('tada', weights);
    return weights;
  }

  render() {
    return (
      <div>
        <span className="lifts">{this.props.liftNumber}&nbsp;</span>
        <span className="weight">
          {round(this.props.orm *
            generateRepIntensity(
              this.props.weekNumber, this.props.setNumber),
              this.props.roundingFactor ? this.props.roundingFactor : 2.5,
            )}
          {this.props.unit}
        </span>
        <span class="weight-distribution">{
          this.calculateWeights(
              [1.25, 2.5, 5, 10, 15, 20, 25, 30].reverse(),
              // generateRepIntensity(
              //   this.props.weekNumber,
              //   this.props.setNumber,
              //   this.props.roundingFactor ? this.props.roundingFactor : 2.5,
              // ),
              50,
              []
          )
        }/each side</span>
      </div>
    )
  }
}

export default Rep;