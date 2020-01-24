import React, { Component } from 'react';
import NavbarLink from './NavbarLink';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar__links">
          <NavbarLink name="Регистрация" />
          <NavbarLink name="Войти" />
        </ul>
      </nav>
    );
  }
}
