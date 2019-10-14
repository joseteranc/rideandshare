import React from "react";
import Logo from "./icons/Logo";
import Footer from "./components/Footer";
import styled from "styled-components";
import StartDate from "./components/StartDate";
import ReturnDate from "./components/ReturnDate";
import LocationField from "./components/LocationField";
import LocationFieldBar from "./components/LocationField";
const Main = styled.main`
  padding: 10px;
  background-color: #f8f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Main>
      <Logo />
      <LocationFieldBar />
      <StartDate />
      <ReturnDate />
      <Footer />
    </Main>
  );
}

export default App;
