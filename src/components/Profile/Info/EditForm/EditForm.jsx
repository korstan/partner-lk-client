import React, { Component } from 'react';
import ProfileInfoSection from 'components/Profile/Info/Section';
import ProfileInfoReadFormElement from 'components/Profile/Info/ReadForm/Element';
import ProfileInfoEditFormElement from 'components/Profile/Info/EditForm/Element';

export default class ProfileInfoEditForm extends Component {
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
          <ProfileInfoEditFormElement
            title="Телефон предприятия"
            name="phone"
            value={this.state.info.phone}
            type="text"
          />
          <ProfileInfoEditFormElement
            title="Фактический адрес"
            name="actualAddress"
            value={this.state.info.actualAddress}
          />
          <ProfileInfoEditFormElement
            title="Страна"
            name="country"
            value={this.state.info.country}
          />
          <ProfileInfoEditFormElement title="Город " name="city" value={this.state.info.city} />
          <ProfileInfoEditFormElement title="Улица" name="street" value={this.state.info.street} />
          <ProfileInfoEditFormElement title="Дом" name="building" value={this.state.info.building} />
          <ProfileInfoEditFormElement title="Офис" name="office" value={this.state.info.office} />
        </ProfileInfoSection>
        <ProfileInfoSection title="Дополнительная информация">
          <ProfileInfoEditFormElement
            title="Ссылка на сайт: "
            name="website"
            value={this.state.info.website}
            type="textarea"
          />
          <ProfileInfoEditFormElement
            title="Краткое описание"
            name="description"
            value={this.state.info.description}
            type="textarea"
          />
          <ProfileInfoEditFormElement
            title="Сфера интересов организации"
            name="interests"
            value={this.state.info.interests}
            type="textarea"
          />
          <ProfileInfoEditFormElement title="Логотип" type="file" />
        </ProfileInfoSection>
      </form>
    );
  }
}
