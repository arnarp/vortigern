/** Type Definitions */
export interface IStarsState {
  isFetching?: boolean;
  count?: number;
  error?: boolean;
  message?: any;
}

export interface IStarsAction {
  type: string;
  payload?: {
    count?: number;
    message?: any;
  };
}
