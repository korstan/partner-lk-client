import React, { Component } from 'react';
import Header from 'components/UI/Header/Header';
import HeaderNavbar from 'components/UI/Header/Navbar/Navbar';
import HeaderNavbarLink from 'components/UI/Header/Navbar/Link';

import ProfileInfoContainer from 'components/Profile/Info/Container';


export default class PagesProfile extends Component {
  render() {
    return (
      <div className="profile">
        <Header>
          <HeaderNavbar>
            <HeaderNavbarLink
              name="Выйти"
              handleClickEvent={() =>
                (window.location.href = `${window.location.origin}`)
              }
            />
          </HeaderNavbar>
        </Header>
        <main>
          <h2>Профиль организации</h2>
          <ProfileInfoContainer />
        </main>
      </div>
    );
  }
}
