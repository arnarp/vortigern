import { ICounterState } from '../app/Counter/models';
import { IStarsState } from '../app/Stars/starsModels';

export interface IStore {
  counter: ICounterState;
  stars: IStarsState;
};
