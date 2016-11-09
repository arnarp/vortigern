import { ICounterState } from '../app/counter/models';
import { IStarsState } from '../app/Stars/starsModels';

export interface IStore {
  counter: ICounterState;
  stars: IStarsState;
};
