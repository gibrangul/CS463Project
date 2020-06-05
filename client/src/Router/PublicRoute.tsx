import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }: any) => {
  
  return (
    <Route
      {...rest}
      component={(props: any) =>
        // isAuthenticated ? <Redirect to="/dashboard" /> : 
        <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
