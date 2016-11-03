import { ICounter } from '../app/models/counter';
import { IStars } from '../app/models/stars';

export interface IStore {
  counter: ICounter;
  stars: IStars;
};
