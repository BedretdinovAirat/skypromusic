import "../style.css";
import styled from "styled-components";
const StyledCenterblockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
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
`;
const StyledSearchSVG = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`;
const StyledSearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
function BlockSearch() {
  return (
    <StyledCenterblockSearch>
      <StyledSearchSVG>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </StyledSearchSVG>
      <StyledSearchText type="search" placeholder="Поиск" name="search" />
    </StyledCenterblockSearch>
  );
}
export default BlockSearch;
