import BurgerMenu from "../burgerMenu/BurgerMenu";
import "../style.css";
import React from "react";
import styled from "styled-components";
const StyledMainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`;
const StyledNavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
const StyledLogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;
const StyledNavBurger = styled.div`
  *::before {
    content: "";
    position: absolute;
    top: 0;
    width: 30px;
  }
  *::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 30px;
  }
  cursor: pointer;
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
const StyledBurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;
// const styled = styled.div``;
// здесь работа со стилями закончена, кроме тернарных операторов
function Navigation() {
  const [menuActive, setMenuActive] = React.useState(false);
  const items = [
    { value: "Главное", href: "!" },
    { value: "Мой плейлист", href: "!" },
    { value: "Войти", href: "!" },
  ];
  return (
    <StyledMainNav>
      <StyledNavLogo>
        <StyledLogoImage src="img/logo.png" alt="logo" />
      </StyledNavLogo>
      <StyledNavBurger onClick={() => setMenuActive(!menuActive)}>
        <StyledBurgerLine></StyledBurgerLine>
        <StyledBurgerLine></StyledBurgerLine>
        <StyledBurgerLine></StyledBurgerLine>
      </StyledNavBurger>
      <BurgerMenu active={menuActive} setActive={setMenuActive} items={items} />
    </StyledMainNav>
  );
}
export default Navigation;
