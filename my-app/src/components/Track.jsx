import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "../styledComponents/StyledTrack";
import { useThemeContext } from "../pages/ThemeContext/ThemeContext";

function Track({
  track,
  setTracks,
  setChangeTrack,
  name,
  author,
  album,
  duration_in_seconds,
  track_file,
}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const { theme } = useThemeContext();
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <S.PlaylistItem
      onClick={() => setChangeTrack({ name, album, author, track_file })}
    >
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSVG alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSVG>
          </S.TrackTitleImage>
          {isLoading ? (
            <SkeletonTheme highlightColor="#696969" baseColor="#272727">
              <Skeleton width={200} height={20} />
            </SkeletonTheme>
          ) : (
            <S.TrackTitleText>
              <S.TrackTitleLink theme={theme}>
                {name} <S.TrackTitleSpan></S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          )}
        </S.TrackTitle>
        {isLoading ? (
          <SkeletonTheme highlightColor="#696969" baseColor="#272727">
            <Skeleton width={250} height={20} />
          </SkeletonTheme>
        ) : (
          <S.TrackAuthor>
            <S.TrackAuthorLink theme={theme}>{author}</S.TrackAuthorLink>
          </S.TrackAuthor>
        )}
        {isLoading ? (
          <SkeletonTheme highlightColor="#696969" baseColor="#272727">
            <Skeleton width={250} height={20} />
          </SkeletonTheme>
        ) : (
          <S.TrackAlbum>
            <S.TrackAlbumLink theme={theme}>{album}</S.TrackAlbumLink>
          </S.TrackAlbum>
        )}
        {isLoading ? (
          <SkeletonTheme highlightColor="#696969" baseColor="#272727">
            <Skeleton width={10} height={20} />
          </SkeletonTheme>
        ) : (
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
        )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
export default Track;
