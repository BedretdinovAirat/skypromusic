import React from "react";
import * as S from "../../styledComponents/StyledCenterBlock";
import BlockSearch from "../BlockSearch";
import CenterBlockFilter from "../CenterBlockFilter";
import { useThemeContext } from "../../pages/ThemeContext/ThemeContext";
function MyPlaylistTracks() {
  const { theme } = useThemeContext();
  // осталось разобраться с лайками, апимузик, в субботу
  return (
    <S.MainCenterblock>
      <BlockSearch />
      <S.CenterBlockH2 theme={theme}>Мой плейлист</S.CenterBlockH2>
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
        <S.ContentPlaylist></S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default MyPlaylistTracks;
