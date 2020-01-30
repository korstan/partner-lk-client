import React, { Component } from 'react';
import Header from 'components/header/Header';
import InfoSection from 'components/profile/InfoSection';

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
