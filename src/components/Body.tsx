import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const Body = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Switch>
  );
};

export default Body;
