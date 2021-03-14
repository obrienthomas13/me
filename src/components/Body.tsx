import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const BodyWrapper = styled.div`
  padding: 24px 50px;
  background-color: tomato;
  flex: 1;
`;

const Body = () => {
  return (
    <BodyWrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </BodyWrapper>
  );
};

export default Body;
