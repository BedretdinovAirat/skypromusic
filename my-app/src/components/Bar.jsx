import "../style.css";
import styled from "styled-components";
const StyledBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 0.5);
`;
const StyledBarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
const StyledBarPlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`;
const StyledBarPlayerBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
const StyledBarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`;
const StyledPlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;
const StyledPlayerBTNPrev = styled.div`
  margin-right: 23px;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const StyledPlayerBTNPlay = styled.div`
  margin-right: 23px;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const StyledPlayerBTNNext = styled.div`
  margin-right: 28px;
  fill: #a53939;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const StyledPlayerBTNRepeat = styled.div`
  margin-right: 24px;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const StyledPlayerBTNShuffle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const StyledPlayerPrevSVG = styled.svg`
  width: 15px;
  height: 14px;
`;
const StyledPlayerPlaySVG = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`;
const StyledPlayerNextSVG = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`;
const StyledPlayerRepeatSVG = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
const StyledPlayerShuffleSVG = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
const StyledPlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`;
const StyledTrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image author" "image album";
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const StyledTrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`;
const StyledTrackPlaySVG = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
const StyledTrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`;
const StyledTrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  white-space: nowrap;
`;
const StyledTrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`;
const StyledTrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
`;
const StyledTrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;
const StyledTrackPlayLike = styled.div`
  padding: 5px;
`;
const StyledTrackPlayDis = styled.div`
  padding: 5px;
  margin-left: 28.5px;
`;
const StyledTrackPlayLikeSVG = styled.svg`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;
const StyledTrackPlayDisSVG = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
`;
const StyledBarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;
const StyledVolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;
const StyledVolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;
const StyledVolumeSVG = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;
const StyledVolumeProgress = styled.div`
  width: 109px;
`;
const StyledVolumeProgressLine = styled.input`
  width: 109px;
`;
function Bar() {
  return (
    <StyledBar>
      <StyledBarContent>
        <StyledBarPlayerProgress></StyledBarPlayerProgress>
        <StyledBarPlayerBlock>
          <StyledBarPlayer>
            <StyledPlayerControls>
              <StyledPlayerBTNPrev>
                <StyledPlayerPrevSVG alt="prev">
                  <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                </StyledPlayerPrevSVG>
              </StyledPlayerBTNPrev>
              <StyledPlayerBTNPlay>
                <StyledPlayerPlaySVG alt="play">
                  <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                </StyledPlayerPlaySVG>
              </StyledPlayerBTNPlay>
              <StyledPlayerBTNNext>
                <StyledPlayerNextSVG alt="next">
                  <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                </StyledPlayerNextSVG>
              </StyledPlayerBTNNext>
              <StyledPlayerBTNRepeat>
                <StyledPlayerRepeatSVG alt="repeat">
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                </StyledPlayerRepeatSVG>
              </StyledPlayerBTNRepeat>
              <StyledPlayerBTNShuffle>
                <StyledPlayerShuffleSVG alt="shuffle">
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                </StyledPlayerShuffleSVG>
              </StyledPlayerBTNShuffle>
            </StyledPlayerControls>
            <StyledPlayerTrackPlay>
              <StyledTrackPlayContain>
                <StyledTrackPlayImage>
                  <StyledTrackPlaySVG alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </StyledTrackPlaySVG>
                </StyledTrackPlayImage>
                <StyledTrackPlayAuthor>
                  <StyledTrackPlayAuthorLink href="http://">
                    Ты та...
                  </StyledTrackPlayAuthorLink>
                </StyledTrackPlayAuthor>
                <StyledTrackPlayAlbum>
                  <StyledTrackPlayAlbumLink href="http://">
                    Баста
                  </StyledTrackPlayAlbumLink>
                </StyledTrackPlayAlbum>
              </StyledTrackPlayContain>

              <StyledTrackPlayLikeDis>
                <StyledTrackPlayLike className="_btn-icon">
                  <StyledTrackPlayLikeSVG alt="like">
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </StyledTrackPlayLikeSVG>
                </StyledTrackPlayLike>
                <StyledTrackPlayDis className="_btn-icon">
                  <StyledTrackPlayDisSVG alt="dislike">
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                  </StyledTrackPlayDisSVG>
                </StyledTrackPlayDis>
              </StyledTrackPlayLikeDis>
            </StyledPlayerTrackPlay>
          </StyledBarPlayer>
          <StyledBarVolumeBlock>
            <StyledVolumeContent>
              <StyledVolumeImage>
                <StyledVolumeSVG alt="volume">
                  <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                </StyledVolumeSVG>
              </StyledVolumeImage>
              <StyledVolumeProgress className="_btn">
                <StyledVolumeProgressLine
                  className="_btn"
                  type="range"
                  name="range"
                />
              </StyledVolumeProgress>
            </StyledVolumeContent>
          </StyledBarVolumeBlock>
        </StyledBarPlayerBlock>
      </StyledBarContent>
    </StyledBar>
  );
}
export default Bar;
