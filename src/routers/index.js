import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import CenterSpinner from '../components/CenterSpinner';
import App from '../components/App';

const Films = lazy(() => import('../components/Films'));
const NotFoundPage = lazy(() => import('../components/NotFoundPage'));
const Residents = lazy(() => import('../components/Residents'));
const PlanetDetails = lazy(() => import('../components/PlanetDetails'));

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<CenterSpinner />}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/details" component={PlanetDetails} />
        <Route exact path="/residents" component={Residents} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Route exact path="/:id" component={App} />
        <Redirect from="*" to="/not-found" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
