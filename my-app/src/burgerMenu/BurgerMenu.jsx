import React from "react";
import "../style.css";
import * as S from "../styledComponents/StyledBurgerMenu";
import { useThemeContext } from "../pages/ThemeContext/ThemeContext";

const BurgerMenu = ({ user, logOut }) => {
  const { toggleTheme, theme } = useThemeContext();
  return (
    // <S.NavMenu>
    <S.MenuList>
      <S.MenuItem theme={theme}>
        <S.MenuLink to="/">Главное</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem theme={theme}>
        <S.MenuLink to="/myplaylist">Мой плейлист</S.MenuLink>
      </S.MenuItem>
      <S.MenuItem theme={theme}>
        <S.MenuLink onClick={user !== null ? logOut : null} to="/myplaylist">
          Выйти
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem theme={theme}>
        <S.MenuLink onClick={toggleTheme}>Тема</S.MenuLink>
      </S.MenuItem>
    </S.MenuList>
    // </S.NavMenu>
  );
};
export default BurgerMenu;
