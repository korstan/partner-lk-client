import React, { Component } from 'react';
import 'components/shared/Header/Header.css';

export default class Header extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <header>
        <div>{left}</div>
        <div>{right}</div>
      </header>
    );
  }
}
