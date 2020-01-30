import React, { Component } from 'react';
import 'components/UI/Header/Header.css';

export default class Header extends Component {
  render() {
    return <header>{this.props.children}</header>;
  }
}
