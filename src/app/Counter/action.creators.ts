import { ICounterAction } from './models';
import { INCREMENT, DECREMENT } from './action.types';

/** Action Creator: Increments the Counter */
export function createIncrementAction(): ICounterAction {
  return {
    type: INCREMENT,
  };
}

/** Action Creator: Decrements the Counter */
export function createDecrementAction(): ICounterAction {
  return {
    type: DECREMENT,
  };
}
