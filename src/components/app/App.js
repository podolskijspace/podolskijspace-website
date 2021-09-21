import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import MenuBtn from '../menu-btn/MenuBtn';
import Menu from '../menu/Menu';
import {menuChanged} from '../../actions'
import './App.css';
import Form from '../form/Form';

function App({menuChanged}) {
  const menuToggle = (event) => {
    if ((event.target.closest('.js-close') && !event.target.closest('.js-not-close')) || event.target.closest('.js-total-close')) {
      menuChanged();
    }
  }

  return (
    <div className="App">
      <Menu onMenuClick={menuToggle}/>
      <MenuBtn onMenuClick={menuChanged}/>
      <Header />
      <Form />
    </div>
  );
}

const mstp = () => {
  return {};
}

const mdtp = {
  menuChanged
}

export default connect(mstp, mdtp)(App);