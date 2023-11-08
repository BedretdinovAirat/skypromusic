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

export const MyPlaylist = () => {
  const tracks = [
    {
      id: 1,
      name: "Guilty",
      author: "Nero",
      album: "Welcome Reality",
      isLike: true,
      time: "4:44",
    },
    {
      id: 2,
      name: "Elektro",
      author: "Dynoro, Outwork, Mr. Gee",
      album: "Elektro",
      isLike: true,
      time: "2:22",
    },
    {
      id: 3,
      name: `I'm Fire`,
      author: "Ali Bakgor",
      album: "I’m Fire",
      isLike: true,
      time: "2:22",
    },
    {
      id: 4,
      name: "Non Stop",
      author: "Стоункат, Psychopath",
      album: "Non Stop",
      isLike: true,
      time: "4:12",
    },
    {
      id: 5,
      name: "Run Run",
      author: "Jaded, Will Clarke, AR/CO",
      album: "Run Run",
      isLike: true,
      time: "2:54",
    },
    {
      id: 6,
      name: "Eyes on Fire",
      author: "Blue Foundation, Zeds Dead ",
      album: "Eyes on Fire",
      isLike: true,
      time: "5:20",
    },
    {
      id: 7,
      name: "Mucho Bien",
      author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
      album: "Mucho Bien",
      isLike: true,
      time: "3:41",
    },
    {
      id: 8,
      name: "Knives n Cherries",
      author: "minthaze",
      album: "Captivating",
      isLike: true,
      time: "1:48",
    },
    {
      id: 9,
      name: "How Deep Is Your Love",
      author: "Calvin Harris, Disciples",
      album: "How Deep Is Your Love",
      isLike: true,
      time: "3:32",
    },
    {
      id: 10,
      name: "Morena",
      author: "Tom Boxer",
      album: "Soundz Made in Romania",
      isLike: true,
      time: "4:44",
    },
  ];
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>
          <Navigation />
          <div className="myPlaylist">
            {/* <Navigation /> */}
            <div className="myPlaylist__content">
              <h1 className="myPlaylist__title">Мои треки</h1>
              <div className="myPlaylist__tracks">
                {tracks.map((track) => (
                  <Track
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
