import Header from '../header/Header';
import Menu from '../menu/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
    </div>
  );
}

export default App;

/*
<section class="wrapper wrapper--hero hero">
      <div class="hero__layover"></div>
      <div class="container container--hero">
        <h1 class="hero__title title title--main">
          Подольское пространство
        </h1>
        <p class="hero__text">
          Найди свой огонь
        </p>
      </div>
    </section>
    <div class="menu js-menu js-close">
      <div class="menu__layover js-close"></div>
      <div class="menu__wrapper js-not-close">
        <div class="me menu__me">
          <div class="column">
            <p class="me__name">
              Гончаров Никита
            </p>
            <div class="me__text">
              Frontend developer
            </div>
          </div>
          <div class="me__img">
            <img src="images/me.jpg" alt="me">
          </div>
        </div>
        <div class="nav menu__nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a class="nav__link active">
                Главная
              </a>
            </li>
            <li class="nav__item">
              <a href="./about" class="nav__link">
                Моя история
              </a>
            </li>
            <li class="nav__item">
              <a href="./advantages" class="nav__link">
                Достижения
              </a>
            </li>
            <li class="nav__item">
              <a href="./thoughts/" class="nav__link">
                Мысли и идеи
              </a>
            </li>
          </ul>
        </div>
        <a class="menu__logo logo active">
          podolskijspace
        </a>
      </div>
    </div>
    <div class="menu-btn js-menu-btn">
      <svg class="ham ham6" viewBox="0 0 100 100" width="40">
        <path
              class="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" />
        <path
              class="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" />
        <path
              class="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" />
      </svg>
    </div>
*/