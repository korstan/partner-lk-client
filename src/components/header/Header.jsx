import React, { Component } from 'react';
import 'components/header/Header.css';
import Navbar from 'components/header/Navbar';

export default class Header extends Component {
  static Navbar = Navbar;
  render() {
    return <header>{this.props.children}</header>;
  }
}
