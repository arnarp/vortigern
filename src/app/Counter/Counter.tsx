import * as React from 'react';
import { createIncrementAction, createDecrementAction } from './action.creators';
import { ICounterState, ICounterAction } from './models';
const { connect } = require('react-redux');
const s = require('./Counter.css');

interface IProps {
  counter: ICounterState;
  increment: Redux.ActionCreator<ICounterAction>;
  decrement: Redux.ActionCreator<ICounterAction>;
}

@connect(
  state => ({ counter: state.counter }),
  dispatch => ({
    decrement: () => dispatch(createDecrementAction()),
    increment: () => dispatch(createIncrementAction()),
  })
)
export default class Counter extends React.Component<IProps, void> {

  public render() {
    const { increment, decrement, counter } = this.props;

    return (
      <div className={s.counter}>
        <h4>Counter Example</h4>
        <button
          name="incBtn"
          onClick={increment}>
          INCREMENT
        </button>
        <button
          name="decBtn"
          onClick={decrement}
          disabled={counter.count <= 0}>
          DECREMENT
        </button>
        <p>{counter.count}</p>
      </div>
    );
  }
}
