import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import * as Paths from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Object.keys(Paths).map((key) => {
          const Element = Paths[key];

          const keyToLowerCase = key.toLowerCase();

          let path = keyToLowerCase;

          if (keyToLowerCase === "home" || keyToLowerCase === "index") {
            path = "/";
          } else if (keyToLowerCase === "notfound") {
            path = "*";
          }

          return <Route path={path} element={<Element />} key={key} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
