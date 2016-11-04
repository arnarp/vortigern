import { expect } from 'chai';
import * as actions from './counterActions';
import counterReducer from './counterReducer';
import { ICounterState, ICounterAction } from './counterModels';

/** Module */
describe('Counter Module', () => {
  describe('Reducer', () => {
    let state: ICounterState = { count: 10 };

    it('handles action of type INCREMENT', () => {
      const action: ICounterAction = { type: actions.INCREMENT };
      expect(counterReducer(state, action)).to.be.eql({ count: state.count + 1 });
    });

    it('handles action of type DECREMENT', () => {
      const action: ICounterAction = { type: actions.DECREMENT };
      expect(counterReducer(state, action)).to.be.eql({ count: state.count - 1 });
    });

    it('handles actions with unknown type', () => {
      expect(counterReducer(state, { type: '' })).to.be.eql({ count: state.count });
    });

  });
});
