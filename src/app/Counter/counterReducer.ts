import { ICounterState, ICounterAction } from './counterModels';
import { INCREMENT, DECREMENT } from './counterActions';

/** Counter: Initial State */
const initialState: ICounterState = {
  count: 0,
};

/** Reducer: CounterReducer */
export default function counterReducer(state = initialState, action?: ICounterAction) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: ((state.count - 1 > 0) ? state.count - 1 : 0),
      };

    default:
      return state;
  }
}
