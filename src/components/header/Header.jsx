import React from 'react';
import Navbar from './Navbar';
import NavbarLink from './NavbarLink';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Navbar>
        <NavbarLink name="Регистрация" />
        <NavbarLink name="Войти" />
      </Navbar>
    </header>
  );
}
