import BurgerMenu from "../burgerMenu/BurgerMenu";
import "../style.css";
import React from "react";
import * as S from "../styledComponents/StyledNavigation";

function Navigation({user, logOut}) {
  const [menuActive, setMenuActive] = React.useState(false);
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={() => setMenuActive(!menuActive)}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      <BurgerMenu user={user} logOut={logOut} active={menuActive} setActive={setMenuActive} />
    </S.MainNav>
  );
}
export default Navigation;
