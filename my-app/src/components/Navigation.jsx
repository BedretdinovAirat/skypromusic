import BurgerMenu from "../burgerMenu/BurgerMenu";
import "../style.css";
import React from "react";
import * as S from "../styledComponents/StyledNavigation";
import * as Styled from "../styledComponents/StyledBurgerMenu";

function Navigation({ user, logOut }) {
  const [menuActive, setMenuActive] = React.useState(false);

  const handleBurgerMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="/img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={handleBurgerMenu}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <Styled.NavMenu>
        {menuActive ? <BurgerMenu user={user} logOut={logOut} /> : null}
      </Styled.NavMenu>
    </S.MainNav>
  );
}
export default Navigation;
