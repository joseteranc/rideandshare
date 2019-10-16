import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Chat from "./pages/Chat";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
const Main = styled.main`
  background-color: #f8f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/offers" component={Offers} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </Main>
  );
}

export default App;
