import React, { Component } from 'react';
import ProfileInfoTabs from 'components/Profile/Info/Tabs';
import ProfileInfoEditForm from 'components/Profile/Info/EditForm/EditForm';
import ProfileInfoReadForm from 'components/Profile/Info/ReadForm/ReadForm';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableEditMode: false,
      info: {
        organization: 'ООО "Ромашка"',
        inn: '1111111111',
        phone: '+7(111)333-33-33',
        actualAddress: 'Российская Федерация, Свердловская обл., г. Екатеринбург, ул. Есенина, д.12, офис 345',
        country: 'Российская Федерация',
        city: 'Екатеринбург',
        street: 'Есенина',
        building: '12',
        office: '345',
        website: 'https://stackoverflow.com/questions/56332282/is-it-possible-to-display-flexbox-items-in-two-rows-instead-of-one',
        description: 'Разработка клиентских веб-приложений и дальнейшая поддержка готового продукта на протяжении времени, оговорённого в контракте. Основна в 1999 году в г. Екатеринбург.',
        interests: 'Разработка ПО',
        logo: null,
      },
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleEdit() {
    this.setState({
      enableEditMode: true,
    });
  }

  handleSubmit() {}

  handleCancel() {
    this.setState({
      enableEditMode: false,
    });
  }

  render() {
    return (
      <>
        <ProfileInfoTabs
          enableEditMode={this.state.enableEditMode}
          handleEdit={this.handleEdit}
          handleSave={this.handleSubmit}
          handleCancel={this.handleCancel}
        />
        {this.state.enableEditMode ? (
          <ProfileInfoEditForm info={this.state.info} />
        ) : (
          <ProfileInfoReadForm info={this.state.info} />
        )}
      </>
    );
  }
}
