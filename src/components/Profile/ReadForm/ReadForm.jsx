import React, { Component } from 'react';
import ProfileSection from 'components/Profile/Section';
import ProfileReadFormElement from 'components/Profile/ReadForm/Element';

export default class ProfileReadForm extends Component {
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
        <ProfileSection title="Основная информация">
          <ProfileReadFormElement
            title="Название регистрируемой организации"
            value={this.state.info.organization}
          />
          <ProfileReadFormElement
            title="ИНН регистрируемой организации"
            value={this.state.info.inn}
          />
        </ProfileSection>
        <ProfileSection title="Контактная информация">
          <ProfileReadFormElement
            title="Телефон предприятия"
            value={this.state.info.phone}
          />
          <ProfileReadFormElement
            title="Фактический адрес"
            value={this.state.info.actualAddress}
          />
          <ProfileReadFormElement
            title="Страна"
            value={this.state.info.country}
          />
          <ProfileReadFormElement title="Город " value={this.state.info.city} />
          <ProfileReadFormElement title="Улица" value={this.state.info.street} />
          <ProfileReadFormElement title="Дом" value={this.state.info.building} />
          <ProfileReadFormElement title="Офис" value={this.state.info.office} />
        </ProfileSection>
        <ProfileSection title="Дополнительная информация">
          <ProfileReadFormElement
            title="Ссылка на сайт: "
            value={this.state.info.website}
          />
          <ProfileReadFormElement
            title="Краткое описание"
            value={this.state.info.description}
          />
          <ProfileReadFormElement
            title="Сфера интересов организации"
            value={this.state.info.interests}
          />
          <ProfileReadFormElement title="Логотип" name="logo" type="file" />
        </ProfileSection>
      </form>
    );
  }
}
