import React, { Component } from 'react';
import Header from 'components/UI/Header/Header';
import HeaderNavbar from 'components/UI/Header/Navbar/Navbar';
import HeaderNavbarLink from 'components/UI/Header/Navbar/Link';
import InfoSection from 'components/Profile/InfoSection';

export default class PagesProfile extends Component {
  static a = 1;

  render() {
    return (
      <div className="profile">
        <Header>
          <HeaderNavbar>
            <HeaderNavbarLink
              name="Выйти"
              handleClickEvent={() => window.location.href=`${window.location.origin}`}
            />
          </HeaderNavbar>
        </Header>
        <h2>Профиль </h2>
        <InfoSection title="Основная информация об организации">
        
        </InfoSection>
        <InfoSection title="Контактная информация об организации">

        </InfoSection>
        <InfoSection title="Дополнительная информация об организации">

        </InfoSection>
      </div>
    );
  }
}
