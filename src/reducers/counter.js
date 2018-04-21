// import Immutable from 'immutable';

// const initialState = Immutable.Map({ counter: 0 });

// const actionsMap = {
//   increment(state /*, action*/) {
//     return state.update('counter', n => n + 1);
//   },
//   decrement(state /*, action*/) {
//     return state.update('counter', n => n - 1);
//   },
// };

// export default (state = initialState, action) => {
//   const reduceFn = actionsMap[action.type];
//   if (!reduceFn) return state;
//   return reduceFn(state, action);
// };

import { handleActions } from 'redux-actions';

const initialState = {
  counter: 0
}

const reducer = handleActions({
  ['INCREMENT'](state, { payload: { duy } }) {
    return { counter: state.counter + duy }
  },
  ['DECREMENT'](state, { payload: { amount } }) {
    return { counter: state.counter + amount }
  }
}, initialState);

export default reducer;