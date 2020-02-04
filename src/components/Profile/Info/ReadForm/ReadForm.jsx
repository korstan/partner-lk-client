import React, { Component } from 'react';
import ProfileInfoSection from 'components/Profile/Info/Section';
import ProfileInfoReadFormElement from 'components/Profile/Info/ReadForm/Element';

export default class ProfileInfoReadForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {},
    };
  }

  componentDidMount() {
    const { info } = this.props;
    this.setState({ info });
  }

  render() {
    return (
      <form className="info-container">
        <ProfileInfoSection title="Основная информация">
          <ProfileInfoReadFormElement
            title="Название регистрируемой организации"
            value={this.state.info.organization}
          />
          <ProfileInfoReadFormElement
            title="ИНН регистрируемой организации"
            value={this.state.info.inn}
          />
        </ProfileInfoSection>
        <ProfileInfoSection title="Контактная информация">
          <ProfileInfoReadFormElement
            title="Телефон предприятия"
            value={this.state.info.phone}
          />
          <ProfileInfoReadFormElement
            title="Фактический адрес"
            value={this.state.info.actualAddress}
          />
          <ProfileInfoReadFormElement
            title="Страна"
            value={this.state.info.country}
          />
          <ProfileInfoReadFormElement title="Город " value={this.state.info.city} />
          <ProfileInfoReadFormElement title="Улица" value={this.state.info.street} />
          <ProfileInfoReadFormElement title="Дом" value={this.state.info.building} />
          <ProfileInfoReadFormElement title="Офис" value={this.state.info.office} />
        </ProfileInfoSection>
        <ProfileInfoSection title="Дополнительная информация">
          <ProfileInfoReadFormElement
            title="Ссылка на сайт: "
            value={this.state.info.website}
          />
          <ProfileInfoReadFormElement
            title="Краткое описание"
            value={this.state.info.description}
          />
          <ProfileInfoReadFormElement
            title="Сфера интересов организации"
            value={this.state.info.interests}
          />
          <ProfileInfoReadFormElement title="Логотип" name="logo" type="file" />
        </ProfileInfoSection>
      </form>
    );
  }
}
