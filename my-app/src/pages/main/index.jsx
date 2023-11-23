import "../../style.css";
import Navigation from "../../components/Navigation";
import CenterBlock from "../../components/CenterBlock";
import MainSideBar from "../../components/MainSideBar";
import * as S from "../../styledComponents/StyledApp";
import Bar from "../../components/Bar";
import Footer from "../../components/Footer";
import React from "react";
export const Main = ({ user, logOut, tracks, setTracks }) => {
  const [changeTrack, setChangeTrack] = React.useState(null);
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation user={user} logOut={logOut} />
          <CenterBlock
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
