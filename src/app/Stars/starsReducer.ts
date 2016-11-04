import { IStarsState, IStarsAction } from './starsModels';
import { GET_REQUEST, GET_SUCCESS, GET_FAILURE } from './starsActions';

/** Initial State */
const initialState: IStarsState = {
  isFetching: false,
};

/** Reducer */
export default function starsReducer(state = initialState, action: IStarsAction) {
  switch (action.type) {
    case GET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case GET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        count: action.payload.count,
      });

    case GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        message: action.payload.message,
        error: true,
      });

    default:
      return state;
  }
}
