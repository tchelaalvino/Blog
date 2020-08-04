import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Blog from '../components/home';
import InternalPost from '../components/internalPost';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route exact path="/internalPost" component={InternalPost} />
    </Switch>
  );
}
