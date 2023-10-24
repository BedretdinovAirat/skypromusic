import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import * as S from "../styledComponents/StyledTrack";

function Track({ track }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <S.PlaylistItem key={track.id}>
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
              <S.TrackTitleLink href="http://">
                {track.name} <S.TrackTitleSpan></S.TrackTitleSpan>
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
            <S.TrackAuthorLink href="http://">{track.author}</S.TrackAuthorLink>
          </S.TrackAuthor>
        )}
        {isLoading ? (
          <SkeletonTheme highlightColor="#696969" baseColor="#272727">
            <Skeleton width={250} height={20} />
          </SkeletonTheme>
        ) : (
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{track.album}</S.TrackAlbumLink>
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
            <S.TrackTimeText>{track.time}</S.TrackTimeText>
          </S.TrackTime>
        )}
      </S.PlaylistTrack>
    </S.PlaylistItem>
  );
}
export default Track;
