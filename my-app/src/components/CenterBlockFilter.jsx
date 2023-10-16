import "../style.css";
import React from "react";
function CenterBlockFilter() {
  const [openAuthor, setOpenAuthor] = React.useState(false);
  const [openYear, setOpenYear] = React.useState(false);
  const [openGenre, setOpenGenre] = React.useState(false);
  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className="filter__button button-author _btn-text "
        onClick={() => {
          setOpenAuthor(!openAuthor);
          setOpenYear(false);
          setOpenGenre(false);
        }}
      >
        исполнителю
        <nav >
          <ul className={openAuthor ? "menu-filter active" : "nav__menu menu"}>
            <li className="menu-item"> Nero</li>
            <li className="menu-item"> Dynoro, Outwork, Mr. Gee</li>
            <li className="menu-item"> Ali Bakgor</li>
            <li className="menu-item"> Стоункат, Psychopath</li>
            <li className="menu-item"> Jaded, Will Clarke, AR/CO</li>
            <li className="menu-item"> Blue Foundation, Zeds Dead</li>
            <li className="menu-item">
              HYBIT, Mr. Black, Offer Nissim, Hi Profile
            </li>
            <li className="menu-item"> minthaze</li>
            <li className="menu-item"> Calvin Harris, Disciples</li>
            <li className="menu-item"> Tom Boxer</li>
          </ul>
        </nav>
      </div>
      <div
        className="filter__button button-year _btn-text "
        onClick={() => {
          setOpenYear(!openYear);
          setOpenAuthor(false);
          setOpenGenre(false);
        }}
      >
        году выпуска
        <nav >
          <ul className={openYear ? "menu-filter active" : "nav__menu menu"}>
            <li className="menu-item"> По умолчанию</li>
            <li className="menu-item"> Сначала новые</li>
            <li className="menu-item"> Сначала старые</li>
            {/* <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li> */}
          </ul>
        </nav>
      </div>
      <div
        className="filter__button button-genre _btn-text "
        onClick={() => {
          setOpenGenre(!openGenre);
          setOpenAuthor(false);
          setOpenYear(false);
        }}
      >
        жанру
        <nav >
          <ul className={openGenre ? "menu-filter active" : "nav__menu menu"}>
            <li className="menu-item"> Рок</li>
            <li className="menu-item"> Хип-хоп</li>
            <li className="menu-item"> Поп-музыка</li>
            <li className="menu-item"> Техно</li>
            <li className="menu-item"> Инди</li>
            {/* <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default CenterBlockFilter;
// menu filter
// menu list
// menu item
