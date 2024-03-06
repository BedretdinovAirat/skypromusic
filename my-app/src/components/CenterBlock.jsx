import "../style.css";
import BlockSearch from "./BlockSearch";
import CenterBlockFilter from "./CenterBlockFilter";
import Track from "./Track";
import * as S from "../styledComponents/StyledCenterBlock";
import React from "react";
import { useThemeContext } from "../pages/ThemeContext/ThemeContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAllTracksQuery } from "./redux/ApiMusic";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterTracks, putFilteredTracks } from "../store/TracksSlice";

function CenterBlock() {
  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  const { data, isLoading } = useAllTracksQuery();
  const initialTracks = useSelector((state) => state.track.initialTracks);
  const filteredTracks = useSelector((state) => state.track.filteredTracks);
  const isFiltered = useSelector((state) => state.track.isFiltered);
  const search = useSelector((state) => state.track.search);
  let filterData = isFiltered ? filteredTracks : initialTracks;

  React.useEffect(() => {
    dispatch(putFilteredTracks(data || []));
    dispatch(filterTracks({ fitlerName: "search", filterValue: search }));
    // console.log(data);
    // console.log(initialTracks);
    console.log(data);
    // console.log(initialTracks);
  }, [dispatch, data, isLoading, search]);
  return (
    <S.MainCenterblock>
      <BlockSearch />
      <S.CenterBlockH2 theme={theme}>Треки</S.CenterBlockH2>
      <CenterBlockFilter />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitleCol>Трек</S.PlaylistTitleCol>
          <S.PlaylistTitleCol>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol>АЛЬБОМ</S.PlaylistTitleCol>
          <S.PlaylistTitleCol>
            <S.PlaylistTitleSVG alt="time">
              <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
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
            filterData.map((track) => (
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
                isFavoriteLike={false}
                // track_file={track.track_file}
                {...track}
              />
            ))
          )}
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
export default CenterBlock;
