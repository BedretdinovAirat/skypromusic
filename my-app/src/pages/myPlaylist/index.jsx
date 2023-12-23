import Navigation from "../../components/Navigation";
import "../../App.css";
// import Bar from "../../components/Bar";
import * as S from "../../styledComponents/StyledApp";
import MyPlaylistTracks from "../../components/MyPlaylistTracks/MyPlaylistTracks";

export const MyPlaylist = () => {
  return (
    <S.Main>
      <Navigation />
      <MyPlaylistTracks />
    </S.Main>
  );
};
