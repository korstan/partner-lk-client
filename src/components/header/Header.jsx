import React, { Component } from 'react';
import './Header.css';
import Navbar from './Navbar';

export default class Header extends Component {
  static Navbar = Navbar;
  render() {
    return <header>{this.props.children}</header>;
  }
}
