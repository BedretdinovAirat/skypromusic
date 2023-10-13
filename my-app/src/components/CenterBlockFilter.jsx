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
        onClick={() => setOpenAuthor(!openAuthor)}
      >
        исполнителю
        <ul
          className={openAuthor ? "drop__down-list active" : "nav__menu menu"}
        >
          <li> Nero</li>
          <li> Dynoro, Outwork, Mr. Gee</li>
          <li> Ali Bakgor</li>
          <li> Стоункат, Psychopath</li>
          <li> Jaded, Will Clarke, AR/CO</li>
          <li> Blue Foundation, Zeds Dead</li>
          <li> HYBIT, Mr. Black, Offer Nissim, Hi Profile</li>
          <li> minthaze</li>
          <li> Calvin Harris, Disciples</li>
          <li> Tom Boxer</li>
        </ul>
      </div>
      <div
        className="filter__button button-year _btn-text "
        onClick={() => setOpenYear(!openYear)}
      >
        году выпуска
        <ul className={openYear ? "drop__down-list active" : "nav__menu menu"}>
          <li> По умолчанию</li>
          <li> Сначала новые</li>
          <li> Сначала старые</li>
          {/* <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li> */}
        </ul>
      </div>
      <div
        className="filter__button button-genre _btn-text "
        onClick={() => setOpenGenre(!openGenre)}
      >
        жанру
        <ul className={openGenre ? "drop__down-list active" : "nav__menu menu"}>
          <li> Рок</li>
          <li> Хип-хоп</li>
          <li> Поп-музыка</li>
          <li> Техно</li>
          <li> Инди</li>
          {/* <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li> */}
        </ul>
      </div>
    </div>
  );
}
export default CenterBlockFilter;
