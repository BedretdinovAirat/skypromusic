import "../../style.css";
import Navigation from "../../components/Navigation";
import CenterBlock from "../../components/CenterBlock";
import MainSideBar from "../../components/MainSideBar";
import * as S from "../../styledComponents/StyledApp";
// import Bar from "../../components/Bar";
// import Footer from "../../components/Footer";
import React from "react";
// import { useThemeContext } from "../ThemeContext/ThemeContext";
// import { useSelector } from "react-redux";

export const Main = ({ user, logOut, tracks, setTracks, isLoading }) => {
  // const [changeTrack, setChangeTrack] = React.useState(null);
  // const changeTrack = useSelector((state) => state.track.changeTrack);
  // const { theme } = useThemeContext();
  // React.useEffect(() => {
  //   console.log(changeTrack);
  // }, [changeTrack]);
  return (
    <S.Main>
      <Navigation user={user} logOut={logOut} />
      <CenterBlock
      // isLoading={isLoading}
      // changeTrack={changeTrack}
      // setChangeTrack={setChangeTrack}
      // tracks={tracks}
      // setTracks={setTracks}
      />
      <MainSideBar user={user} logOut={logOut} />
    </S.Main>

    // <S.Main>
    //   <Navigation />
    //   <CenterBlock />
    //   <MainSideBar />
    // </S.Main>
  );
};
