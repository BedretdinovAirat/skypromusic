import "../style.css";
import * as S from "../styledComponents/StyledBar";

function Bar() {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress></S.BarPlayerProgress>
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <S.PlayerControls>
              <S.PlayerBTNPrev>
                <S.PlayerPrevSVG alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </S.PlayerPrevSVG>
              </S.PlayerBTNPrev>
              <S.PlayerBTNPlay>
                <S.PlayerPlaySVG alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </S.PlayerPlaySVG>
              </S.PlayerBTNPlay>
              <S.PlayerBTNNext>
                <S.PlayerNextSVG alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </S.PlayerNextSVG>
              </S.PlayerBTNNext>
              <S.PlayerBTNRepeat>
                <S.PlayerRepeatSVG alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </S.PlayerRepeatSVG>
              </S.PlayerBTNRepeat>
              <S.PlayerBTNShuffle>
                <S.PlayerShuffleSVG alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </S.PlayerShuffleSVG>
              </S.PlayerBTNShuffle>
            </S.PlayerControls>
            <S.PlayerTrackPlay>
              <S.TrackPlayContain>
                <S.TrackPlayImage>
                  <S.TrackPlaySVG alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </S.TrackPlaySVG>
                </S.TrackPlayImage>
                <S.TrackPlayAuthor>
                  <S.TrackPlayAuthorLink href="http://">
                    Ты та...
                  </S.TrackPlayAuthorLink>
                </S.TrackPlayAuthor>
                <S.TrackPlayAlbum>
                  <S.TrackPlayAlbumLink href="http://">
                    Баста
                  </S.TrackPlayAlbumLink>
                </S.TrackPlayAlbum>
              </S.TrackPlayContain>

              <S.TrackPlayLikeDis>
                <S.TrackPlayLike className="_btn-icon">
                  <S.TrackPlayLikeSVG alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </S.TrackPlayLikeSVG>
                </S.TrackPlayLike>
                <S.TrackPlayDis className="_btn-icon">
                  <S.TrackPlayDisSVG alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </S.TrackPlayDisSVG>
                </S.TrackPlayDis>
              </S.TrackPlayLikeDis>
            </S.PlayerTrackPlay>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <S.VolumeContent>
              <S.VolumeImage>
                <S.VolumeSVG alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </S.VolumeSVG>
              </S.VolumeImage>
              <S.VolumeProgress>
                <S.VolumeProgressLine
                  type="range"
                  name="range"
                />
              </S.VolumeProgress>
            </S.VolumeContent>
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}
export default Bar;
