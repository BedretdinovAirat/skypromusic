import styled from "styled-components";

export const MainNav = styled.nav`
  width: 244px;
  background-color: ${(props) => props.theme.color};
  padding: 20px 0 20px 36px;
`;
export const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;
export const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: ${(props) => props.theme.color};
`;
export const NavBurger = styled.div`
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
export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.backgroundBurgerLine};
`;
