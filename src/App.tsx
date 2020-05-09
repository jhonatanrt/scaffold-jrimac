import { withOAuth } from 'aws-amplify-react';
import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import Cotizador from './scenes/Cotizador';
import Home from './scenes/Home';
import history from './utils/history';


import './App.scss';

const App: React.FC = (props: any) => {
  return (
    <Router history={history}>
      <Suspense fallback="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cotizador" component={Cotizador} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default withOAuth(App);