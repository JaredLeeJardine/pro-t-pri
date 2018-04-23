import ActionTypes from '../actions';

export const defaultState = {
  level: 0,
  timeSteps: 0,
}

export const levelSelector = (state) => state.level;
export const timeStepsSelector = (state) => state.timeSteps;

export function rootReducer(state = defaultState, action) {
  switch(action.type) {
    case ActionTypes.STEP_GAME:
      return {
        ...state,
        timeSteps: state.timeSteps + 1,
      }
    default:
      return state;
  }
}
