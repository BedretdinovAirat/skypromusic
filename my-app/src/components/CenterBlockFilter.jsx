import "../style.css";
import React from "react";
import styled from "styled-components";
const StyledCenterblockFilter = styled.div`
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
  margin-bottom: 51px;
`;
const StyledFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
const StyledFilterButton = styled.div`
  color: white;
  &:hover {
    color: #d9b6ff;
  }
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  position: relative;
`;
const StyledMenuItem = styled.li`
  &:hover {
    color: #d9b6ff;
  }
  color: white;
  padding: 5px 0;
  margin-bottom: 16px;
`;
function CenterBlockFilter() {
  const [openAuthor, setOpenAuthor] = React.useState(false);
  const [openYear, setOpenYear] = React.useState(false);
  const [openGenre, setOpenGenre] = React.useState(false);
  return (
    <StyledCenterblockFilter>
      <StyledFilterTitle>Искать по:</StyledFilterTitle>
      <StyledFilterButton
        className="button-author _btn-text "
        onClick={() => {
          setOpenAuthor(!openAuthor);
          setOpenYear(false);
          setOpenGenre(false);
        }}
      >
        исполнителю
        <nav>
          <ul className={openAuthor ? "menu-filter active" : "nav__menu menu"}>
            <StyledMenuItem> Nero</StyledMenuItem>
            <StyledMenuItem> Dynoro, Outwork, Mr. Gee</StyledMenuItem>
            <StyledMenuItem> Ali Bakgor</StyledMenuItem>
            <StyledMenuItem> Стоункат, Psychopath</StyledMenuItem>
            <StyledMenuItem> Jaded, Will Clarke, AR/CO</StyledMenuItem>
            <StyledMenuItem> Blue Foundation, Zeds Dead</StyledMenuItem>
            <StyledMenuItem>
              HYBIT, Mr. Black, Offer Nissim, Hi Profile
            </StyledMenuItem>
            <StyledMenuItem> minthaze</StyledMenuItem>
            <StyledMenuItem> Calvin Harris, Disciples</StyledMenuItem>
            <StyledMenuItem> Tom Boxer</StyledMenuItem>
          </ul>
        </nav>
      </StyledFilterButton>
      <StyledFilterButton
        className="button-year _btn-text "
        onClick={() => {
          setOpenYear(!openYear);
          setOpenAuthor(false);
          setOpenGenre(false);
        }}
      >
        году выпуска
        <nav>
          <ul className={openYear ? "menu-filter active" : "nav__menu menu"}>
            <StyledMenuItem> По умолчанию</StyledMenuItem>
            <StyledMenuItem> Сначала новые</StyledMenuItem>
            <StyledMenuItem> Сначала старые</StyledMenuItem>
          </ul>
        </nav>
      </StyledFilterButton>
      <StyledFilterButton
        className="button-genre _btn-text "
        onClick={() => {
          setOpenGenre(!openGenre);
          setOpenAuthor(false);
          setOpenYear(false);
        }}
      >
        жанру
        <nav>
          <ul className={openGenre ? "menu-filter active" : "nav__menu menu"}>
            <StyledMenuItem> Рок</StyledMenuItem>
            <StyledMenuItem> Хип-хоп</StyledMenuItem>
            <StyledMenuItem> Поп-музыка</StyledMenuItem>
            <StyledMenuItem> Техно</StyledMenuItem>
            <StyledMenuItem> Инди</StyledMenuItem>
          </ul>
        </nav>
      </StyledFilterButton>
    </StyledCenterblockFilter>
  );
}
export default CenterBlockFilter;
