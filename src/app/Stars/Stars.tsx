import * as React from 'react';
import { getStars } from './starsActions';
import { IStarsState, IStarsAction } from './starsModels';
const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

interface IProps {
  stars: IStarsState;
  getStars: Redux.ActionCreator<IStarsAction>;
}

@asyncConnect([{
  promise: ({ store: { dispatch } }) => {
    return dispatch(getStars());
  },
}])
@connect(
  state => ({ stars: state.stars })
)
export default class Stars extends React.Component<IProps, {}> {

  public render() {
    const { stars } = this.props;

    return (
      <div>
        {stars.isFetching ? 'Fetching Stars' : stars.count}
      </div>
    );
  }
}
