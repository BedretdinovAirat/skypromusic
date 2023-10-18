import BurgerMenu from "../burgerMenu/BurgerMenu";
import "../style.css";
import React from "react";

function Navigation() {
  const [menuActive, setMenuActive] = React.useState(false);
  const items = [
    { value: "Главное", href: "!" },
    { value: "Мой плейлист", href: "!" },
    { value: "Войти", href: "!" },
  ];
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <div
        className="nav__burger burger"
        onClick={() => setMenuActive(!menuActive)}
      >
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <BurgerMenu active={menuActive} setActive={setMenuActive} items={items} />
    </nav>
  );
}
export default Navigation;
