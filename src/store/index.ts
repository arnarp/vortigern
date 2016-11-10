import { ICounterState } from '../app/counter/models';
import IStarsState from '../app/stars/state';

interface IStore {
  counter: ICounterState;
  stars: IStarsState;
};

export default IStore;
