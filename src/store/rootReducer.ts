import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { counterReducer } from '../app/counter';
import { starsReducer } from '../app/stars';
import { IStore } from './IStore';

const { reducer } = require('redux-connect');

const rootReducer: Redux.Reducer<IStore> = combineReducers<IStore>({
  routing: routerReducer,
  counter: counterReducer,
  stars: starsReducer,
  reduxAsyncConnect: reducer,
});

export default rootReducer;
