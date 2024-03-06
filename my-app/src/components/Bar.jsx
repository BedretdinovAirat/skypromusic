import "../style.css";
import * as S from "../styledComponents/StyledBar";
import React, { useCallback, useContext } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  playTrack,
  pauseTrack,
  switchTrack,
  backSwitchTrack,
  changeIsShuffled,
  changeCurrentTrack,
} from "../store/TracksSlice";
import { AuthContext } from "../store/AuthContext";
import {
  useAddMyTracksMutation,
  useDeleteMyTracksMutation,
} from "./redux/ApiMusic";
export default function Bar() {
  const [setLike] = useAddMyTracksMutation();
  const [setDislike] = useDeleteMyTracksMutation();
  // const { user } = useContext(AuthContext);
  const changeTrack = useSelector((state) => state.track.changeTrack);
  const $isPlaying = useSelector((state) => state.track.$isPlaying);
  const isShuffled = useSelector((state) => state.track.isShuffled);
  const dispatch = useDispatch();

  // const isLiked = changeTrack.stared_user?.find(
  //   (userElem) => userElem.id === user.id
  // );
  const audioRef = React.useRef(null);
  // const [$isPlaying, set$isPlaying] = React.useState(false);
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
    const playBackTrack = () => {
      dispatch(switchTrack());
    };
    newVolume.addEventListener("timeupdate", changeTime);
    newVolume.addEventListener("ended", playBackTrack);
    return () => {
      newVolume.removeEventListener("timeupdate", changeTime);
      newVolume.removeEventListener("ended", playBackTrack);
    };
  }, [dispatch]);
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
  const handleStart = useCallback(() => {
    audioRef.current.play();
    dispatch(playTrack());
    console.log(audioRef.current.play());
  }, [dispatch]);

  const handleStop = useCallback(() => {
    audioRef.current.pause();
    dispatch(pauseTrack());
  }, [dispatch]);

  const togglePlay = $isPlaying ? handleStop : handleStart;
  const toggleLoop = isLoop ? handleStopLoop : handleStartLoop;
  React.useEffect(() => {
    if (changeTrack) {
      handleStart();
    } else {
      handleStop();
    }
  }, [changeTrack, handleStart, handleStop]);
  const handlePrevious = () => {
    dispatch(backSwitchTrack());
  };
  const handleNext = () => {
    dispatch(switchTrack());
  };
  const handleShuffle = () => {
    dispatch(changeIsShuffled());
  };
  const handleLike = () => {
    const token = localStorage.getItem("access");
    changeTrack.isLiked
      ? setDislike({ id: changeTrack.id, token })
      : setLike({ id: changeTrack.id, token });
    dispatch(changeCurrentTrack({ isLiked: !changeTrack.isLiked }));
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
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                  </S.PlayerPrevSVG>
                </S.PlayerBTNPrev>
                <S.PlayerBTNPlay>
                  <S.PlayerPlaySVG onClick={togglePlay} alt="play">
                    <use
                      xlinkHref={
                        $isPlaying
                          ? "/img/icon/sprite.svg#icon-pause"
                          : "/img/icon/sprite.svg#icon-play"
                      }
                    ></use>
                  </S.PlayerPlaySVG>
                </S.PlayerBTNPlay>
                <S.PlayerBTNNext>
                  <S.PlayerNextSVG onClick={handleNext} alt="next">
                    <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                  </S.PlayerNextSVG>
                </S.PlayerBTNNext>
                <S.PlayerBTNRepeat>
                  {isLoop ? (
                    <S.PlayerRepeatSVGActive onClick={toggleLoop} alt="repeat">
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerRepeatSVGActive>
                  ) : (
                    <S.PlayerRepeatSVG onClick={toggleLoop} alt="repeat">
                      <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                    </S.PlayerRepeatSVG>
                  )}
                </S.PlayerBTNRepeat>
                <S.PlayerBTNShuffle>
                  {isShuffled ? (
                    <S.PlayerShuffleSVGActive
                      onClick={handleShuffle}
                      alt="shuffle"
                    >
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerShuffleSVGActive>
                  ) : (
                    <S.PlayerShuffleSVG onClick={handleShuffle} alt="shuffle">
                      <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                    </S.PlayerShuffleSVG>
                  )}
                </S.PlayerBTNShuffle>
              </S.PlayerControls>
              <S.PlayerTrackPlay>
                <S.TrackPlayContain>
                  <S.TrackPlayImage>
                    <S.TrackPlaySVG alt="music">
                      <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
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

                <S.TrackPlayLikeDis onClick={handleLike}>
                  <S.TrackPlayLike className="_btn-icon">
                    <S.TrackPlayLikeSVG alt="like">
                      {/* <use xlinkHref="img/icon/sprite.svg#icon-like"></use> */}
                      {changeTrack.isLiked ? (
                        <use xlinkHref="/img/icon/sprite.svg#active-like"></use>
                      ) : (
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                      )}
                    </S.TrackPlayLikeSVG>
                  </S.TrackPlayLike>
                  {/* <S.TrackPlayDis className="_btn-icon">
                    <S.TrackPlayDisSVG alt="dislike">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </S.TrackPlayDisSVG>
                  </S.TrackPlayDis> */}
                </S.TrackPlayLikeDis>
              </S.PlayerTrackPlay>
            </S.BarPlayer>
            <S.BarVolumeBlock>
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSVG alt="volume">
                    <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
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
