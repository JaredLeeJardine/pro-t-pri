import React, { Component } from 'react'
import logo from '../../../resources/logo.svg'

class Game extends Component {
  render() {
    return (
      <div className="game">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Game;
