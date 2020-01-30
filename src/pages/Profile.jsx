import React, { Component } from 'react';
import Header from 'components/UI/Header/Header';
import HeaderNavbar from 'components/UI/Header/Navbar/Navbar';
import HeaderNavbarLink from 'components/UI/Header/Navbar/Link';
import InfoSection from 'components/Profile/InfoSection';
import InfoSectionElement from 'components/Profile/InfoSection/Element';

export default class PagesProfile extends Component {
  static a = 1;

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
          <article>
            <InfoSection title="Основная информация">
              <InfoSectionElement
                title="Название регистрируемой организации"
                value='ООО "Ромашка"'
              />
              <InfoSectionElement
                title="ИНН регистрируемой организации"
                value="1111111111"
              />
            </InfoSection>
            <InfoSection title="Контактная информация">
              <InfoSectionElement
                title="Телефон предприятия"
                value="+7(111)111-11-11"
              />
              <InfoSectionElement
                title="Фактический адрес"
                value="Российская Федерация,
                Свердловская обл., ул. Есенина, д.12, офис 345"
              />
              <InfoSectionElement title="Страна" value="Российская Федерация" />
              <InfoSectionElement title="Город " value="Екатеринбург" />
              <InfoSectionElement title="Улица" value="Есенина" />
              <InfoSectionElement title="Дом" value="12" />
              <InfoSectionElement title="Офис" value="345" />
            </InfoSection>
            <InfoSection title="Дополнительная информация">
              <InfoSectionElement
                title="Ссылка на сайт: "
                value="https://stackoverflow.com/questions/56332282/is-it-possible-to-display-flexbox-items-in-two-rows-instead-of-one"
              />
              <InfoSectionElement
                title="Краткое описание"
                value="Разработка клиентских веб-приложений и дальнейшая поддержка готового продукта на протяжении времени, оговорённого в контракте. Основна в 1999 году в г. Екатеринбург."
              />
              <InfoSectionElement
                title="Сфера интересов организации"
                value="345"
              />
              <InfoSectionElement title="Логотип" value="345" />
            </InfoSection>
          </article>
        </main>
      </div>
    );
  }
}
