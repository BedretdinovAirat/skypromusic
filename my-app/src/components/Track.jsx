import React, { useContext, useMemo } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import * as S from "../styledComponents/StyledTrack";
import { useThemeContext } from "../pages/ThemeContext/ThemeContext";
import { useDispatch } from "react-redux";
import { playTracks } from "../store/TracksSlice";
import { useSelector } from "react-redux";
import {
  useAddMyTracksMutation,
  useAllTracksQuery,
  useDeleteMyTracksMutation,
} from "./redux/ApiMusic";
import { AuthContext } from "../store/AuthContext";
function Track({
  track,
  setTracks,
  name,
  author,
  album,
  duration_in_seconds,
  track_file,
  data,
  id,
  stared_user,
  isFavoriteLike,
  isLiked,
}) {
  const changeTrack = useSelector((state) => state.track.changeTrack);
  const $isPlaying = useSelector((state) => state.track.$isPlaying);
  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  const { user, logOut } = useContext(AuthContext);
  const [addMyTracks, { error: likeError }] = useAddMyTracksMutation();
  const [deleteMyTracks, { error: dislikeError }] = useDeleteMyTracksMutation();
  const { refetch } = useAllTracksQuery();
  if (
    (likeError && likeError.status === 401) ||
    (dislikeError && dislikeError.status === 401)
  ) {
    logOut();
  }
  // const isLiked = useMemo(
  //   () => stared_user?.some((el) => el.id === user.id),
  //   [stared_user, user]
  // );
  const handleAddMyTracks = async (event) => {
    event.stopPropagation();
    const token = localStorage.getItem("access");
    await addMyTracks({ token, id }).unwrap();
    refetch();
  };
  const handleDeleteMyTracks = async (event) => {
    event.stopPropagation();
    const token = localStorage.getItem("access");
    await deleteMyTracks({ token, id }).unwrap();
    refetch();
  };
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5000);
  // }, []);

  return (
    <S.PlaylistItem
      onClick={() =>
        dispatch(
          playTracks({
            name,
            album,
            author,
            track_file,
            data,
            stared_user,
            id,
            isLiked,
          })
        )
      }
    >
      <S.PlaylistTrack key={track.id}>
        <S.TrackTitle>
          <S.TrackTitleImage theme={theme}>
            {changeTrack && changeTrack.id === track.id ? (
              <S.trackPlayingDot $isPlaying={$isPlaying}></S.trackPlayingDot>
            ) : (
              <S.TrackTitleSVG alt="music">
                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSVG>
            )}
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
          {isLiked || isFavoriteLike ? (
            <S.TrackTimeSVG alt="time">
              <use
                xlinkHref="/img/icon/sprite.svg#icon-like-active"
                onClick={handleDeleteMyTracks}
              ></use>
            </S.TrackTimeSVG>
          ) : (
            <S.TrackTimeSVG alt="time">
              <use
                xlinkHref="/img/icon/sprite.svg#icon-like"
                onClick={handleAddMyTracks}
              ></use>
            </S.TrackTimeSVG>
          )}
          <S.TrackTimeText>{duration_in_seconds}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
export default Track;
