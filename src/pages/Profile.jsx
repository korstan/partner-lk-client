import React, { Component } from 'react';
import Header from 'components/header/Header';

export default class Profile extends Component {
  static a = 1;

  render() {
    return (
      <div className="profile">
        <Header>
          <Header.Navbar>
            <Header.Navbar.Link
              name="Выйти"
              handleClickEvent={() => window.location.href=`${window.location.origin}`}
            />
          </Header.Navbar>
        </Header>
        <h1>Profile</h1>
      </div>
    );
  }
}
