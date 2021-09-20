import React from "react";
import Container from '../container/Container';
import bg from "../../images/header-bg.jpg";
import Title from "../title/Title";
import { Route, withRouter } from "react-router-dom";


const Header = ({match, history}) => {
  const headerMod = (history.location.pathname.length - 1) ? ' header--add': '';

  console.log(headerMod);
  return (

    <header className={`header${headerMod}`} style={{background: `url(${bg}) no-repeat center`}}>
      <div className="header__layover">
        <Container mod="header__container">
          <Route path="/" exact>
            <Title mod="header__title" main>
              Подольское пространство
            </Title>
            <p className="header__text">
              Найди свой огонь
            </p>
          </Route>
          <Route path="/about" exact>
            <Title mod="header__title" main>
              Моя история
            </Title>
            <p className="header__text">
              Да унизит он свой дар постыдными делами
            </p>
          </Route>
          <Route path="/advantages" exact>
            <Title mod="header__title" main>
              Достижения
            </Title>
            <p className="header__text">
              Действительно ли ты сделал всё, чтобы достичь своей цели?
            </p>
          </Route>
          <Route path="/thoughts" exact>
            <Title mod="header__title" main>
              Мысли и идеи
            </Title>
            <p className="header__text">
              Говори правду, даже если твой голос дрожит  
            </p>
          </Route>
        </Container>
      </div>
    </header>
  )
}

export default withRouter(Header);