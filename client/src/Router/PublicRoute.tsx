import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = useSelector(
    (state: any) => !!state.auth.authenticated
  );
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? (
          <Redirect to="/retailers" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
