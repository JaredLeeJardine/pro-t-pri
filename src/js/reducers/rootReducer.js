export const defaultState = {
  level: 0,
}

export const levelSelector = (state) => state.level;

export function rootReducer(state = defaultState, action) {
  switch(action.type) {
    default:
      return state;
  }
}
