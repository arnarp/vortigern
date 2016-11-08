import { expect } from 'chai';
import { INCREMENT, DECREMENT } from './action.types';
import counterReducer from './reducer';
import { ICounterState, ICounterAction } from './models';

/** Module */
describe('Counter Module', () => {
  describe('Reducer', () => {
    let state: ICounterState = { count: 10 };

    it('handles action of type INCREMENT', () => {
      const action: ICounterAction = { type: INCREMENT };
      expect(counterReducer(state, action)).to.be.eql({ count: state.count + 1 });
    });

    it('handles action of type DECREMENT', () => {
      const action: ICounterAction = { type: DECREMENT };
      expect(counterReducer(state, action)).to.be.eql({ count: state.count - 1 });
    });

    it('handles actions with unknown type', () => {
      expect(counterReducer(state, { type: '' })).to.be.eql({ count: state.count });
    });

  });
});
