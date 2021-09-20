import React from "react";
import Container from '../container/Container';
import bg from "../../images/header-bg.jpg";
import Title from "../title/Title";


const Header = () => {
  return (

    <header className="header" style={{background: `url(${bg}) no-repeat center`}}>
      <div className="header__layover">
        <Container mod="header__container">
          <Title mod="header__title" main>
            Подольское пространство
          </Title>
          <p className="header__text">
            Найди свой огонь
          </p>
        </Container>
      </div>
    </header>
  )
}

export default Header;