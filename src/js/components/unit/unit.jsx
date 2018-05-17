import React, { Component }  from 'react'
import { NON_BREAKING_SPACE } from '../../constants/strings'

class Unit extends Component {
  render() {
    const {
      unitType,
    } = this.props;
    return (
      <div
        className={`game-unit ${unitType}`}
      >
        {NON_BREAKING_SPACE}
      </div>
    );
  }
}

export default Unit;
