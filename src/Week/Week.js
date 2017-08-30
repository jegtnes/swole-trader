import React, { Component } from 'react';

class Week extends Component {

  render() {
    return (
      <div className="week">
        Hi this is a week. Week {this.props.weekNumber}
      </div>
    )
  }
}

export default Week;
