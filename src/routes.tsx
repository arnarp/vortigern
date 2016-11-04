import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { Home, About, Counter, Stars } from './app/containers';
import Shell from './app/Shell';

export default (
  <Route path="/" component={Shell}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="counter" component={Counter} />
    <Route path="stars" component={Stars} />
  </Route>
);
