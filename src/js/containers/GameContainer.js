import { connect }       from 'react-redux'
import Game              from '../components/game/game';
import { levelSelector } from '../reducers'

function mapStateToProps(state) {
  return {
    level: levelSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => ({});

export const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
