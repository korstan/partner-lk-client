import React, { Component } from 'react';
import NavbarLink from './NavbarLink';

export default class Navbar extends Component {
  static Link = NavbarLink;

  render() {
    return (
      <nav>
        <ul className="navbar__links">{this.props.children}</ul>
      </nav>
    );
  }
}
