import "../style.css";
import * as S from "../styledComponents/StyledBar";
import React from "react";
import moment from "moment";
export default function Bar({ changeTrack, track_file }) {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const [isLoop, setIsLoop] = React.useState(false);

  // общее время трека
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  // momentum
  const formatDuration = moment.utc(duration * 1000).format("mm:ss");
  const formatCurrent = moment.utc(currentTime * 1000).format("mm:ss");

  const changeVolume = (e) => {
    const audioVolume = e.target.value;
    audioRef.current.volume = audioVolume;
    setVolume(audioVolume);
  };
  React.useEffect(() => {
    const newVolume = audioRef.current;
    newVolume.volume = 0.5;
    setVolume(newVolume.volume);
    // аудиреф лежит в переменной newVolume
    const changeTime = () => {
      if (newVolume.currentTime && newVolume.duration) {
        setCurrentTime(newVolume.currentTime);
        setDuration(newVolume.duration);
      } else {
        setCurrentTime(0);
        setDuration(0);
      }
    };
    newVolume.addEventListener("timeupdate", changeTime);
    return () => {
      newVolume.removeEventListener("timeupdate", changeTime);
    };
  }, []);
  const handleTimeChange = (e) => {
    const time = e.target.value;
    audioRef.current.currentTime = time;
  };
  const handleStartLoop = () => {
    audioRef.current.loop = true;
    setIsLoop(true);
    console.log("работает!");
  };

  const handleStopLoop = () => {
    audioRef.current.loop = false;
    setIsLoop(false);
  };
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
    console.log(audioRef.current.play());
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;
  const toggleLoop = isLoop ? handleStopLoop : handleStartLoop;
  React.useEffect(() => {
    if (changeTrack) {
      handleStart();
    } else {
      handleStop();
    }
  }, [changeTrack]);
  const handlePrevious = () => {
    alert("Функция не реализована");
  };
  const handleNext = () => {
    alert("Функция не реализована");
  };
  const handleShuffle = () => {
    alert("Функция не реализована");
  };
  return (
    <>
      <audio loop={false} src={changeTrack.track_file} ref={audioRef}></audio>
      <S.Bar>
        <S.BarContent>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {formatCurrent} : {formatDuration}
          </div>
          <S.BarPlayerProgress
            onChange={handleTimeChange}
            min={0}
            max={duration}
            step={0.01}
            value={currentTime}
            type="range"
          ></S.BarPlayerProgress>
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <S.PlayerControls>
                <S.PlayerBTNPrev>
                  <S.PlayerPrevSVG onClick={handlePrevious} alt="prev">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerPrevSVG>
                </S.PlayerBTNPrev>
                <S.PlayerBTNPlay>
                  <S.PlayerPlaySVG onClick={togglePlay} alt="play">
                    <use
                      xlinkHref={
                        isPlaying
                          ? "img/icon/sprite.svg#icon-pause"
                          : "img/icon/sprite.svg#icon-play"
                      }
                    ></use>
                  </S.PlayerPlaySVG>
                </S.PlayerBTNPlay>
                <S.PlayerBTNNext>
                  <S.PlayerNextSVG onClick={handleNext} alt="next">
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerNextSVG>
                </S.PlayerBTNNext>
                <S.PlayerBTNRepeat>
                  {isLoop ? (
                    <S.PlayerRepeatSVGActive onClick={toggleLoop} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerRepeatSVGActive>
                  ) : (
                    <S.PlayerRepeatSVG onClick={toggleLoop} alt="repeat">
                      <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerRepeatSVG>
                  )}
                </S.PlayerBTNRepeat>
                <S.PlayerBTNShuffle>
                  <S.PlayerShuffleSVG onClick={handleShuffle} alt="shuffle">
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
                      {changeTrack.name}
                    </S.TrackPlayAuthorLink>
                  </S.TrackPlayAuthor>
                  <S.TrackPlayAlbum>
                    <S.TrackPlayAlbumLink href="http://">
                      {changeTrack.author}
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
                    onChange={changeVolume}
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    type="range"
                    name="range"
                  />
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    </>
  );
}
