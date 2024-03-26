import React from "react";
import "../style.css";
import * as S from "../styledComponents/StyledBurgerMenu";
import { useThemeContext } from "../pages/ThemeContext/ThemeContext";
import { AuthContext } from "../store/AuthContext";

const BurgerMenu = () => {
  const { logOut } = React.useContext(AuthContext);
  const { toggleTheme, theme } = useThemeContext();
  return (
    // <S.NavMenu>
    <S.MenuList>
      <S.MenuItem>
        <S.MenuLink theme={theme} to="/">
          Главное
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink theme={theme} to="/myplaylist">
          Мой плейлист
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink
          theme={theme}
          // onClick={user !== null ? logOut : null}
          onClick={() => logOut()}
          // to="/myplaylist"
        >
          Выйти
        </S.MenuLink>
      </S.MenuItem>
      <S.MenuItem>
        <S.MenuLink theme={theme} onClick={toggleTheme}>
          Тема
        </S.MenuLink>
      </S.MenuItem>
    </S.MenuList>
    // </S.NavMenu>
  );
};
export default BurgerMenu;
