import React from "react";
import { Router, Redirect, Route, Switch, useLocation } from "react-router-dom";

import Header from "../components/organisms/Header.js";
import { Home as HomeView } from "../pages";
import history from "../utils/history.js";

const AppRoutes = () => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={HomeView} />
    </Switch>
  </Router>
);

export default AppRoutes;
