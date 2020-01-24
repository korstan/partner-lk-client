import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="navbar__links">
          {this.props.children}
        </ul>
      </nav>
    );
  }
}
