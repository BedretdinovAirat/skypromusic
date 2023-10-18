import "./App.css";
import "./style.css";
import "./Header.css";
import "./Center.css";
import "./Footer.css";
import Navigation from "./components/Navigation";
import CenterBlock from "./components/CenterBlock";
import MainSideBar from "./components/MainSideBar";
import Bar from "./components/Bar";
import Footer from "./components/Footer";
import React from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
`;
const StyledContainer = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;
const StyledMain = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
function App() {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledMain>
          <Navigation />
          <CenterBlock />
          <MainSideBar />
        </StyledMain>
        <Bar />
        <Footer />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default App;
