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
import * as S from "./styledComponents/StyledApp";
import { AppRoutes } from "./routes";
function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation />
          <CenterBlock />
          {/* Роуты */}
          <AppRoutes />
          <MainSideBar />
        </S.Main>
        <Bar />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
}

export default App;
