import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Track({ track }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <div key={track.id} className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          {isLoading ? (
            <SkeletonTheme highlightColor="#696969" baseColor="#272727">
              <Skeleton width={200} height={20} />
            </SkeletonTheme>
          ) : (
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {track.name} <span className="track__title-span"></span>
              </a>
            </div>
          )}
        </div>
        {isLoading ? (
          <SkeletonTheme highlightColor="#696969" baseColor="#272727">
            <Skeleton width={250} height={20} />
          </SkeletonTheme>
        ) : (
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {track.author}
            </a>
          </div>
        )}
        {isLoading ? (
          <SkeletonTheme highlightColor="#696969" baseColor="#272727">
            <Skeleton width={250} height={20} />
          </SkeletonTheme>
        ) : (
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {track.album}
            </a>
          </div>
        )}
        {isLoading ? (
          <SkeletonTheme highlightColor="#696969" baseColor="#272727">
            <Skeleton width={10} height={20} />
          </SkeletonTheme>
        ) : (
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use
                xlinkHref={`img/icon/sprite.svg#icon-${
                  track.isLike ? "like" : "dislike"
                }`}
              />
            </svg>
            <span className="track__time-text">{track.time}</span>
          </div>
        )}
      </div>
    </div>
  );
}
export default Track;
