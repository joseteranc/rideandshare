import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Chat from "./pages/Chat";
import Selection from "./pages/Selection";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import OffersPage from "./pages/OffersPage";
import Offerer from "./pages/Offerer";

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
          <Route exact path="/home" component={Home} />
          <Route exact path="/offers" component={OffersPage} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/selection" component={Selection} />
          <Route exact path="/offerer" component={Offerer} />
        </Switch>
      </Router>
    </Main>
  );
}

export default App;
