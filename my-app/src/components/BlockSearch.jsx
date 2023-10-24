import "../style.css";
import * as S from "../styledComponents/StyledBlockSearch";

function BlockSearch() {
  return (
    <S.CenterblockSearch>
      <S.SearchSVG>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSVG>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterblockSearch>
  );
}
export default BlockSearch;
