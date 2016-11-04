import { ICounterState } from '../app/Counter/counterModels';
import { IStarsState } from '../app/Stars/starsModels';

export interface IStore {
  counter: ICounterState;
  stars: IStarsState;
};
