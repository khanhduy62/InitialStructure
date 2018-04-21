import { createActions } from 'redux-actions'

const { increment, decrement } = createActions({
  'INCREMENT': amount => ({ duy: 1 }),
  'DECREMENT': amount => ({ amount: -1 })
});

export function incrementAmount() {
  return (dispatch, getState) => {
    dispatch(increment());
  };
}

export function decrementAmount() {
  return (dispatch, getState) => {
    dispatch(decrement());
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter.counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
