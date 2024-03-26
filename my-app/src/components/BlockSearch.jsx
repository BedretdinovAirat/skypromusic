import React from "react";
import "../style.css";
import * as S from "../styledComponents/StyledBlockSearch";
import { useDispatch } from "react-redux";
import { filterTracks } from "../store/TracksSlice";

function BlockSearch() {
  const dispatch = useDispatch();
  const searchFilter = (value) => {
    dispatch(filterTracks({ filterName: "search", filterValue: value }));
  };
  // const filteredTracks = dispatch(
  //   playTracks.filter((track) => {
  //     return track.name.toLowerCase().incliudes(value.toLowerCase());
  //   })
  // );
  // filteredTracks();
  return (
    <S.CenterblockSearch>
      <S.SearchSVG>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSVG>
      <S.SearchText
        onChange={(e) => searchFilter(e.target.value.toLocaleLowerCase())}
        // onChange={(e) => console.log(e.target.value)}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  );
}
export default BlockSearch;
