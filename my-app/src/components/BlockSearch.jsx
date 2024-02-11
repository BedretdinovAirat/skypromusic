import React from "react";
import "../style.css";
import * as S from "../styledComponents/StyledBlockSearch";

function BlockSearch() {
  const [value, setValue] = React.useState("");
  // const dispatch = React.useDispatch();

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
        onChange={(e) => console.log(e.target.value)}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CenterblockSearch>
  );
}
export default BlockSearch;
