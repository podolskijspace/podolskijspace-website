import Header from '../header/Header';
import MenuBtn from '../menu-btn/MenuBtn';
import Menu from '../menu/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <MenuBtn />
      <Header />
    </div>
  );
}

export default App;