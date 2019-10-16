import { withOAuth } from 'aws-amplify-react';
import React from 'react';
import './App.css';
import Cotizador from './scenes/Cotizador';
import { Route, Router, Switch } from 'react-router-dom';
import history from './utils/history';


const App: React.FC = (props: any) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Cotizador} />
        <Route exact path="/cotizador" component={Cotizador} />
      </Switch>
    </Router>
  );
}

export default withOAuth(App);