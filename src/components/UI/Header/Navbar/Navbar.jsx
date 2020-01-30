import React, { Component } from 'react';

export default class HeaderNavbar extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar__links">{this.props.children}</ul>
      </nav>
    );
  }
}
