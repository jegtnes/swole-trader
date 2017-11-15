import React, { Component } from 'react';

import { generateRepIntensity } from '../../services/weights';
import { round } from '../../services/round';

class Rep extends Component {
  render() {
    return (
      <div>
        <span className="lifts">{this.props.liftNumber}&nbsp;</span>
        <span className="weight">
          {round(this.props.orm *
            generateRepIntensity(
              this.props.weekNumber, this.props.setNumber),
              this.props.roundingFactor ? this.props.roundingFactor : 2.5
            )}
          {this.props.unit}
        </span>
      </div>
    )
  }
}

export default Rep;