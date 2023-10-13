import React from "react";
import "../style.css";
const BurgerMenu = ({ items, active, setActive }) => {
  return (
    <div className={active ? "nav__menu menu active" : "nav__menu menu"}>
      <ul className="menu__list">
        {items.map((item) => (
          <li className="menu__item">
            <a href={item.href} className="menu__link">
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BurgerMenu;
// работает со стилем nav__menu menu
