import { connect }                          from 'react-redux'
import Game                                 from '../components/game/game';
import { levelSelector, timeStepsSelector } from '../reducers'
import { ActionCreators }                   from '../actions'

function mapStateToProps(state) {
  return {
    level: levelSelector(state),
    timeSteps: timeStepsSelector(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  stepGame: () => dispatch(ActionCreators.stepGameAction())
});

export const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);
