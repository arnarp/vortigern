import { expect } from 'chai';
import * as counter from './counterActions';
import { ICounterAction } from './counterModels';

/** Module */
describe('Counter Module', () => {
  describe('Actions', () => {
    describe('Increment', () => {
      it('has the correct type', () => {
        const action: ICounterAction = counter.increment();
        expect(action.type).to.equal(counter.INCREMENT);
      });
    });

    describe('Decrement', () => {
      it('has the correct type', () => {
        const action: ICounterAction = counter.decrement();
        expect(action.type).to.equal(counter.DECREMENT);
      });
    });
  });
});
