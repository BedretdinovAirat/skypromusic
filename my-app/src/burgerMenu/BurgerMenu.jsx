import React from "react";
import "../style.css";
import * as S from "../styledComponents/StyledBurgerMenu";
const BurgerMenu = ({ items, active, setActive }) => {
  return (
    <S.NavMenu
      active={active}
      onClick={() => setActive(active)}
    >
      <S.MenuList>
        {items.map((item) => (
          <S.MenuItem>
            <S.MenuLink href={item.href}>{item.value}</S.MenuLink>
          </S.MenuItem>
        ))}
      </S.MenuList>
    </S.NavMenu>
  );
};
export default BurgerMenu;
