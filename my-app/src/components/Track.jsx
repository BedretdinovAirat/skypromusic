import React from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import * as S from "../styledComponents/StyledTrack";
import { useThemeContext } from "../pages/ThemeContext/ThemeContext";
import { useDispatch } from "react-redux";
import { playTracks } from "../store/TracksSlice";
function Track({
  track,
  setTracks,
  name,
  author,
  album,
  duration_in_seconds,
  track_file,
}) {
  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);
  return (
    <S.PlaylistItem
      onClick={() => dispatch(playTracks({ name, album, author, track_file }))}
    >
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage theme={theme}>
            <S.TrackTitleSVG alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSVG>
          </S.TrackTitleImage>
          <S.TrackTitleText>
            <S.TrackTitleLink theme={theme}>
              {name} <S.TrackTitleSpan></S.TrackTitleSpan>
            </S.TrackTitleLink>
          </S.TrackTitleText>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink theme={theme}>{author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink theme={theme}>{album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <S.TrackTime>
          <S.TrackTimeSVG alt="time">
            <use
              xlinkHref={`img/icon/sprite.svg#icon-${
                track.isLike ? "like" : "dislike"
              }`}
            />
          </S.TrackTimeSVG>
          <S.TrackTimeText>{duration_in_seconds}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
export default Track;
