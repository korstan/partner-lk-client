import React, { Component } from 'react';
import ProfileSection from 'components/Profile/Section';
import ProfileReadFormElement from 'components/Profile/ReadForm/Element';
import ProfileEditFormElement from 'components/Profile/EditForm/Element';

export default class ProfileEditForm extends Component {
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
          <ProfileEditFormElement
            title="Телефон предприятия"
            name="phone"
            value={this.state.info.phone}
            type="text"
          />
          <ProfileEditFormElement
            title="Фактический адрес"
            name="actualAddress"
            value={this.state.info.actualAddress}
          />
          <ProfileEditFormElement
            title="Страна"
            name="country"
            value={this.state.info.country}
          />
          <ProfileEditFormElement title="Город " name="city" value={this.state.info.city} />
          <ProfileEditFormElement title="Улица" name="street" value={this.state.info.street} />
          <ProfileEditFormElement title="Дом" name="building" value={this.state.info.building} />
          <ProfileEditFormElement title="Офис" name="office" value={this.state.info.office} />
        </ProfileSection>
        <ProfileSection title="Дополнительная информация">
          <ProfileEditFormElement
            title="Ссылка на сайт: "
            name="website"
            value={this.state.info.website}
            type="textarea"
          />
          <ProfileEditFormElement
            title="Краткое описание"
            name="description"
            value={this.state.info.description}
            type="textarea"
          />
          <ProfileEditFormElement
            title="Сфера интересов организации"
            name="interests"
            value={this.state.info.interests}
            type="textarea"
          />
          <ProfileEditFormElement title="Логотип" type="file" />
        </ProfileSection>
      </form>
    );
  }
}
