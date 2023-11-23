import "../style.css";
import BlockSearch from "./BlockSearch";
import CenterBlockFilter from "./CenterBlockFilter";
import Track from "./Track";
import * as S from "../styledComponents/StyledCenterBlock";
import React from "react";
function CenterBlock({ tracks, setChangeTrack }) {
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
            <Track
              track={track}
              name={track.name}
              author={track.author}
              album={track.album}
              duration_in_seconds={track.duration_in_seconds}
              setChangeTrack={setChangeTrack}
              key={track.id}
              track_file={track.track_file}
            />
          ))}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
export default CenterBlock;
