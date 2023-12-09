import "../../style.css";
import Navigation from "../../components/Navigation";
import CenterBlock from "../../components/CenterBlock";
import MainSideBar from "../../components/MainSideBar";
import * as S from "../../styledComponents/StyledApp";
import Bar from "../../components/Bar";
import Footer from "../../components/Footer";
import React from "react";
import { useThemeContext } from "../ThemeContext/ThemeContext";

export const Main = ({ user, logOut, tracks, setTracks, isLoading }) => {
  const [changeTrack, setChangeTrack] = React.useState(null);
  const { theme } = useThemeContext();
  return (
    <S.Wrapper>
      <S.Container theme={theme}>
        <S.Main>
          <Navigation user={user} logOut={logOut} />
          <CenterBlock
            isLoading={isLoading}
            changeTrack={changeTrack}
            setChangeTrack={setChangeTrack}
            tracks={tracks}
            setTracks={setTracks}
          />
          <MainSideBar user={user} logOut={logOut} />
        </S.Main>
        {changeTrack && <Bar changeTrack={changeTrack} />}
        <Footer />
      </S.Container>
    </S.Wrapper>
    // <S.Main>
    //   <Navigation />
    //   <CenterBlock />
    //   <MainSideBar />
    // </S.Main>
  );
};
