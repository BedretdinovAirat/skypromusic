import Navigation from "../../components/Navigation";
import "../../App.css";
// import Bar from "../../components/Bar";
import Footer from "../../components/Footer";
import * as S from "../../styledComponents/StyledApp";
import { useThemeContext } from "../ThemeContext/ThemeContext";

export const MyPlaylist = () => {
  const { theme } = useThemeContext();

  return (
    <S.Wrapper theme={theme}>
      <S.Container>
        <S.Main>
          <Navigation />
          {/* <div className="myPlaylist">
            <div className="myPlaylist__content">
              <h1 className="myPlaylist__title">Мои треки</h1>
              <div className="myPlaylist__tracks">
                {tracks.map((track) => (
                  <Track
                    tracks={tracks}
                    setTracks={setTracks}
                    track={track}
                    key={track.id}
                    name={track.name}
                    author={track.author}
                    album={track.album}
                    isLike={track.isLike}
                    time={track.time}
                  />
                ))}
              </div>
            </div>
          </div> */}
        </S.Main>
        {/* {changeTrack ? <Bar /> : null} */}
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
