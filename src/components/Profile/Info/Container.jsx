import React, { Component } from 'react';
import ProfileInfoSection from 'components/Profile/Info/Section';
import ProfileInfoElement from 'components/Profile/Info/Element';
import ProfileInfoTabs from 'components/Profile/Info/Tabs';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enableEditMode: false,
      info: {
        organization: null,
        inn: null,
        phone: null,
        actualAddress: null,
        country: null,
        city: null,
        street: null,
        building: null,
        office: null,
        website: null,
        description: null,
        interests: null,
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

  handleSubmit() {
    
  }

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
        <form className="info-container">
          <ProfileInfoSection title="Основная информация">
            <ProfileInfoElement
              title="Название регистрируемой организации"
              value='ООО "Ромашка"'
            />
            <ProfileInfoElement
              title="ИНН регистрируемой организации"
              value="1111111111"
            />
          </ProfileInfoSection>
          <ProfileInfoSection title="Контактная информация">
            <ProfileInfoElement
              title="Телефон предприятия"
              value="+7(111)111-11-11"
              type="text"
              enableEditMode={this.state.enableEditMode}
            />
            <ProfileInfoElement
              title="Фактический адрес"
              value="Российская Федерация,
                  Свердловская обл., ул. Есенина, д.12, офис 345"
              enableEditMode={this.state.enableEditMode}
            />
            <ProfileInfoElement
              title="Страна"
              value="Российская Федерация"
              enableEditMode={this.state.enableEditMode}
            />
            <ProfileInfoElement
              title="Город "
              value="Екатеринбург"
              enableEditMode={this.state.enableEditMode}
            />
            <ProfileInfoElement
              title="Улица"
              value="Есенина"
              enableEditMode={this.state.enableEditMode}
            />
            <ProfileInfoElement
              title="Дом"
              value="12"
              enableEditMode={this.state.enableEditMode}
            />
            <ProfileInfoElement
              title="Офис"
              value="345"
              enableEditMode={this.state.enableEditMode}
            />
          </ProfileInfoSection>
          <ProfileInfoSection title="Дополнительная информация">
            <ProfileInfoElement
              title="Ссылка на сайт: "
              value="https://stackoverflow.com/questions/56332282/is-it-possible-to-display-flexbox-items-in-two-rows-instead-of-one"
              enableEditMode={this.state.enableEditMode}
              type="textarea"
            />
            <ProfileInfoElement
              title="Краткое описание"
              value="Разработка клиентских веб-приложений и дальнейшая поддержка готового продукта на протяжении времени, оговорённого в контракте. Основна в 1999 году в г. Екатеринбург."
              type="textarea"
              enableEditMode={this.state.enableEditMode}
            />
            <ProfileInfoElement
              title="Сфера интересов организации"
              value="345"
              type="textarea"
              enableEditMode={this.state.enableEditMode}
            />
            <ProfileInfoElement
              title="Логотип"
              enableEditMode={this.state.enableEditMode}
              type="file"
            />
          </ProfileInfoSection>
        </form>
      </>
    );
  }
}
