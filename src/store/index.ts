import ICounterState from '../app/Counter/state';
import IStarsState from '../app/Stars/state';

interface IStore {
  counter: ICounterState;
  stars: IStarsState;
};

export default IStore;
