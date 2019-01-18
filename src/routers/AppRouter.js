import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Portfolio from '../components/Portfolio';
import Contact from '../components/contact';
import PortfolioItem from '../components/PortfolioItem';

import NotFoundPage from '../components/NotFoundPage';

// BrowserRouter needs at least one div to render
// Switch goes through each route, looking for a match. If none are matched, 404 page shows
const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
          <Route path="/portfolio/:id" component={PortfolioItem} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;

