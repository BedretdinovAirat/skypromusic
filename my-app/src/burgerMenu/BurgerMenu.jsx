import React from "react";
import "../style.css";
import * as S from "../styledComponents/StyledBurgerMenu";
import { NavLink } from "react-router-dom";
const BurgerMenu = ({ user, logOut }) => {
  return (
    // <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <NavLink className="App-link" to="/">
            Главное
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink className="App-link" to="/myplaylist">
            Мой плейлист
          </NavLink>
        </S.MenuItem>
        <NavLink
          onClick={user !== null ? logOut : null}
          className="App-link"
          to="/myplaylist"
        >
          Выйти
        </NavLink>
      </S.MenuList>
    // </S.NavMenu>
  );
};
export default BurgerMenu;
