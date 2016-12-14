import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counterReducer from '../app/Counter/reducer';
import starsReducer from '../app/Stars/reducer';
import IStore from './index';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
