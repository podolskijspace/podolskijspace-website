import React from "react";
import { Link } from "react-router-dom";

const Nav = ({mod=""}) => {
  return (
    <div className={"nav " + mod}>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link js-total-close active">
            Главная
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link js-total-close">
            Моя история
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/advantages" className="nav__link js-total-close">
            Достижения
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/thoughts/" className="nav__link js-total-close">
            Мысли и идеи
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;