import React, { Component }  from 'react'
import { NON_BREAKING_SPACE } from '../../constants/strings'

class GameSpace extends Component {
  render() {
    const {
      terrain,
    } = this.props;
    return (
      <div
        className={`game-space ${terrain}`}
      >
        {this.props.children ? this.props.children : NON_BREAKING_SPACE}
      </div>
    );
  }
}

export default GameSpace;
