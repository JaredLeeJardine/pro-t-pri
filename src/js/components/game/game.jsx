import React, { Component } from 'react'
// import logo from '../../../resources/logo.svg'

class Game extends Component {
  render() {
    const {
      timeSteps,
      stepGame
    } = this.props;
    return (
      <div className="game">
        <div className={'step-game-button'} onClick={stepGame}>
          {'Step Game'}
        </div>
        <div className={'time-steps-display'} >
          {timeSteps}
        </div>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*</header>*/}
      </div>
    );
  }
}

export default Game;
