import { expect } from 'chai';
import { createIncrementAction, createDecrementAction } from './action.creators';
import { INCREMENT, DECREMENT } from './action.types';
import { ICounterAction } from './models';

/** Module */
describe('Counter Module', () => {
  describe('Actions', () => {
    describe('Increment', () => {
      it('has the correct type', () => {
        const action: ICounterAction = createIncrementAction();
        expect(action.type).to.equal(INCREMENT);
      });
    });

    describe('Decrement', () => {
      it('has the correct type', () => {
        const action: ICounterAction = createDecrementAction();
        expect(action.type).to.equal(DECREMENT);
      });
    });
  });
});
