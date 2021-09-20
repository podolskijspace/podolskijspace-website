import React from "react";

const Nav = ({mod=""}) => {
  return (
    <div className={"nav " + mod}>
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link active">
            Главная
          </a>
        </li>
        <li className="nav__item">
          <a href="./about" className="nav__link">
            Моя история
          </a>
        </li>
        <li className="nav__item">
          <a href="./advantages" className="nav__link">
            Достижения
          </a>
        </li>
        <li className="nav__item">
          <a href="./thoughts/" className="nav__link">
            Мысли и идеи
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav;