import * as React from 'react';
const s = require('./style.css');

export default class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.home}>
        <img src="https://s3-eu-west-1.amazonaws.com/ab-play/5b3b4f80a3586bedba26750ed303addd.jpg" />
        <p>Hello!</p>
      </div>
    );
  }
}
