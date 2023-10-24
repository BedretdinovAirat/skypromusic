import "../style.css";
import BlockSearch from "./BlockSearch";
import CenterBlockFilter from "./CenterBlockFilter";
import Track from "./Track";
import * as S from "../styledComponents/StyledCenterBlock";

function CenterBlock() {
  const tracks = [
    {
      id: 1,
      name: "Guilty",
      author: "Nero",
      album: "Welcome Reality",
      isLike: false,
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
      isLike: false,
      time: "2:22",
    },
    {
      id: 4,
      name: "Non Stop",
      author: "Стоункат, Psychopath",
      album: "Non Stop",
      isLike: false,
      time: "4:12",
    },
    {
      id: 5,
      name: "Run Run",
      author: "Jaded, Will Clarke, AR/CO",
      album: "Run Run",
      isLike: false,
      time: "2:54",
    },
    {
      id: 6,
      name: "Eyes on Fire",
      author: "Blue Foundation, Zeds Dead ",
      album: "Eyes on Fire",
      isLike: false,
      time: "5:20",
    },
    {
      id: 7,
      name: "Mucho Bien",
      author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
      album: "Mucho Bien",
      isLike: false,
      time: "3:41",
    },
    {
      id: 8,
      name: "Knives n Cherries",
      author: "minthaze",
      album: "Captivating",
      isLike: false,
      time: "1:48",
    },
    {
      id: 9,
      name: "How Deep Is Your Love",
      author: "Calvin Harris, Disciples",
      album: "How Deep Is Your Love",
      isLike: false,
      time: "3:32",
    },
    {
      id: 10,
      name: "Morena",
      author: "Tom Boxer",
      album: "Soundz Made in Romania",
      isLike: false,
      time: "4:44",
    },
  ];
  return (
    <S.MainCenterblock>
      <BlockSearch />
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <CenterBlockFilter />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitleCol>Трек</S.PlaylistTitleCol>
          <S.PlaylistTitleCol>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol>АЛЬБОМ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol>
            <S.PlaylistTitleSVG alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlaylistTitleSVG>
          </S.PlaylistTitleCol>
        </S.ContentTitle>
        <S.ContentPlaylist>
          {tracks.map((track) => (
            <Track track={track} />
          ))}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
export default CenterBlock;
