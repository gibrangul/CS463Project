import React from "react";
import history from "../history";
import { Router, Switch } from "react-router-dom";

import SignInPage from "../Pages/SignInPage/SignInPage";
import RetailersPage from "../Pages/RetailersPage";
import CategoriesPage from "../Pages/CategoriesPage/CategoriesPage";
import BrandsPage from "../Pages/BrandsPage/BrandsPage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => (
  <div>
    <Router history={history}>
      <Switch>
        {/* <PublicRoute path="/" exact component={SignInPage} /> */}
        <PrivateRoute exact path="/" component={RetailersPage} />
        <PrivateRoute path="/retailers" component={RetailersPage} />
        <PrivateRoute path="/products" component={ProductsPage}/>
        <PrivateRoute path="/categories" component={CategoriesPage} />
        <PrivateRoute path="/brands" component={BrandsPage}/>
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
