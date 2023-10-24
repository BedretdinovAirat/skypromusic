import BurgerMenu from "../burgerMenu/BurgerMenu";
import "../style.css";
import React from "react";
import * as S from "../styledComponents/StyledNavigation";

// здесь работа со стилями закончена, кроме тернарных операторов
function Navigation() {
  const [menuActive, setMenuActive] = React.useState(false);
  const items = [
    { value: "Главное", href: "!" },
    { value: "Мой плейлист", href: "!" },
    { value: "Войти", href: "!" },
  ];
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
      <BurgerMenu active={menuActive} setActive={setMenuActive} items={items} />
    </S.MainNav>
  );
}
export default Navigation;
