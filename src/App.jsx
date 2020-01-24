import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';

function App() {
  return (
    <div className="App">
      <Header>
        <Header.Navbar>
          <Header.Navbar.Link name="Регистрация" />
          <Header.Navbar.Link name="Войти" />
        </Header.Navbar>
      </Header>
      <Modal />
    </div>
  );
}

export default App;
