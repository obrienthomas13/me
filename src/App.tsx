import { Layout } from "antd";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Body from "../src/components/Body";
import "./App.css";
import Foot from "./components/Foot";
import NavBar from "./components/NavBar";

const AppWrapper = styled.div`
  display: flex;
`;

const App = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <Layout>
          <NavBar />
          <Body />
          <Foot />
        </Layout>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
