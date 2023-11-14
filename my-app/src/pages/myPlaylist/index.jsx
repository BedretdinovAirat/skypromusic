import Navigation from "../../components/Navigation";
import "../../App.css";
import Track from "../../components/Track";
// import * as S from "../../styledComponents/StyledMainSideBar";
// import React from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import Bar from "../../components/Bar";
import Footer from "../../components/Footer";
import * as S from "../../styledComponents/StyledApp";

export const MyPlaylist = ({ tracks, setTracks }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation />
          <div className="myPlaylist">
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
          </div>
        </S.Main>
        <Bar />
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
