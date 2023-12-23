import React from "react";
import * as S from "../../styledComponents/StyledCenterBlock";
import BlockSearch from "../BlockSearch";
import CenterBlockFilter from "../CenterBlockFilter";
import { useThemeContext } from "../../pages/ThemeContext/ThemeContext";
import { useGetFavoriteTracksQuery } from "../redux/ApiMusic";
import Track from "../Track";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
function MyPlaylistTracks() {
  const token = localStorage.getItem("access");
  const { theme } = useThemeContext();
  // осталось разобраться с лайками, апимузик, в субботу
  const { data = [], isLoading } = useGetFavoriteTracksQuery({ token });

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
        <S.ContentPlaylist>
          {isLoading ? (
            <SkeletonTheme highlightColor="#696969" baseColor="#272727">
              <Skeleton
                width={1080}
                height={20}
                count={29}
                style={{ marginBottom: "25px" }}
              />
            </SkeletonTheme>
          ) : (
            data.map((track) => (
              <Track
                data={data}
                track={track}
                // track={track}
                // name={track.name}
                // author={track.author}
                // album={track.album}
                // duration_in_seconds={track.duration_in_seconds}
                // setChangeTrack={setChangeTrack}
                key={track.id}
                // track_file={track.track_file}
                isFavoriteLike={true}
                {...track}
              />
            ))
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}

export default MyPlaylistTracks;
