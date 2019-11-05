import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import UserNotifications from "./pages/UserNotifications";
import Selection from "./pages/Selection";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import OffersPage from "./pages/OffersPage";
import OffererProfile from "./pages/OffererProfile";

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
          <Route
            exact
            path="/usernotifications"
            component={UserNotifications}
          />
          <Route exact path="/userprofile" component={UserProfile} />
          <Route exact path="/selection" component={Selection} />
          <Route exact path="/offererprofile" component={OffererProfile} />
        </Switch>
      </Router>
    </Main>
  );
}

export default App;
