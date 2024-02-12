import "../style.css";
import React from "react";
import * as S from "../styledComponents/StyledCenterBlockFilter";
import { useAllTracksQuery } from "./redux/ApiMusic";
import { useDispatch } from "react-redux";
import { filterTracks } from "../store/TracksSlice";

function CenterBlockFilter() {
  const dispatch = useDispatch();
  const { data = [] } = useAllTracksQuery();
  const [genre, setGenre] = React.useState([]);
  const [year, setYear] = React.useState([]);
  const [openAuthor, setOpenAuthor] = React.useState(false);
  const [openYear, setOpenYear] = React.useState(false);
  const [openGenre, setOpenGenre] = React.useState(false);
  const handleClickAuthor = () => {
    setOpenAuthor(!openAuthor);
    setOpenYear(false);
    setOpenGenre(false);
  };
  const handleClickYear = () => {
    setOpenYear(!openYear);
    setOpenAuthor(false);
    setOpenGenre(false);
  };
  const handleClickGenre = () => {
    setOpenGenre(!openGenre);
    setOpenAuthor(false);
    setOpenYear(false);
  };
  const handleFiltered = ({ filterName, filterValue }) => {
    dispatch(filterTracks({ filterName, filterValue }));
  };
  React.useEffect(() => {
    if (data.length > 0) {
      const newGenre = new Set();
      data.forEach((element) => {
        newGenre.add(element.genre);
      });
      setGenre(Array.from(newGenre));
    }
    if (data.length > 0) {
      const newYear = new Set();
      data.forEach((element) => {
        newYear.add(element.release_date);
      });
      setYear(Array.from(newYear));
    }
    console.log(data);
  }, [data]);

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      {openAuthor ? (
        <S.FilterButton onClick={handleClickAuthor}>
          исполнителю
          <nav>
            <S.MenuFilter onClick={(event) => event.stopPropagation()}>
              {data.map((item) => {
                return (
                  <S.MenuItem
                    onClick={() =>
                      handleFiltered({
                        filterName: "author",
                        filterValue: item.author,
                      })
                    }
                    key={item.id}
                  >
                    {item.author}
                  </S.MenuItem>
                );
              })}
              {/* <S.MenuItem> Nero</S.MenuItem> */}
              {/* <S.MenuItem> Dynoro, Outwork, Mr. Gee</S.MenuItem>
              <S.MenuItem> Ali Bakgor</S.MenuItem>
              <S.MenuItem> Стоункат, Psychopath</S.MenuItem>
              <S.MenuItem> Jaded, Will Clarke, AR/CO</S.MenuItem>
              <S.MenuItem> Blue Foundation, Zeds Dead</S.MenuItem>
              <S.MenuItem>
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
              </S.MenuItem>
              <S.MenuItem> minthaze</S.MenuItem>
              <S.MenuItem> Calvin Harris, Disciples</S.MenuItem>
              <S.MenuItem> Tom Boxer</S.MenuItem> */}
            </S.MenuFilter>
          </nav>
        </S.FilterButton>
      ) : (
        <S.FilterButton onClick={handleClickAuthor}>исполнителю</S.FilterButton>
      )}
      {openYear ? (
        <S.FilterButton onClick={handleClickYear}>
          году выпуска
          <nav>
            <S.MenuFilter onClick={(event) => event.stopPropagation()}>
              {year.map((item) => {
                return <S.MenuItem key={item}>{item}</S.MenuItem>;
              })}
              {/* <S.MenuItem> По умолчанию</S.MenuItem> */}
              {/* <S.MenuItem> Сначала новые</S.MenuItem> */}
              {/* <S.MenuItem> Сначала старые</S.MenuItem> */}
            </S.MenuFilter>
          </nav>
        </S.FilterButton>
      ) : (
        <S.FilterButton onClick={handleClickYear}>году выпуска</S.FilterButton>
      )}
      {openGenre ? (
        <S.FilterButton onClick={handleClickGenre}>
          жанру
          <nav>
            <S.MenuFilter onClick={(event) => event.stopPropagation()}>
              {genre.map((item) => {
                return <S.MenuItem key={item}>{item}</S.MenuItem>;
              })}
              {/* <S.MenuItem> Рок</S.MenuItem>
              <S.MenuItem> Хип-хоп</S.MenuItem>
              <S.MenuItem> Поп-музыка</S.MenuItem>
              <S.MenuItem> Техно</S.MenuItem>
              <S.MenuItem> Инди</S.MenuItem> */}
            </S.MenuFilter>
          </nav>
        </S.FilterButton>
      ) : (
        <S.FilterButton onClick={handleClickGenre}>жанру</S.FilterButton>
      )}
    </S.CenterblockFilter>
  );
}
export default CenterBlockFilter;
