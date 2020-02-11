import React from 'react';
import ProfileSection from 'components/Profile/Section';
import ProfileReadFormElement from 'components/Profile/ReadForm/Element';

export default function ReadForm({ info }) {
  return (
    <form className="info-container">
      <ProfileSection title="Основная информация">
        <ProfileReadFormElement
          title="Название регистрируемой организации"
          value={info.organization}
        />
        <ProfileReadFormElement
          title="ИНН регистрируемой организации"
          value={info.inn}
        />
      </ProfileSection>
      <ProfileSection title="Контактная информация">
        <ProfileReadFormElement
          title="Телефон предприятия"
          value={info.contactPhone}
        />
        <ProfileReadFormElement
          title="Фактический адрес"
          value={info.contactAddress}
        />
        <ProfileReadFormElement title="Страна" value={info.contactCountry} />
        <ProfileReadFormElement title="Город " value={info.contactCity} />
        <ProfileReadFormElement title="Улица" value={info.contactStreet} />
        <ProfileReadFormElement title="Дом" value={info.contactBuilding} />
        <ProfileReadFormElement title="Офис" value={info.contactOffice} />
      </ProfileSection>
      <ProfileSection title="Дополнительная информация">
        <ProfileReadFormElement
          title="Ссылка на сайт: "
          value={info.extraWebsite}
        />
        <ProfileReadFormElement
          title="Краткое описание"
          value={info.extraAbout}
        />
        <ProfileReadFormElement
          title="Сфера интересов организации"
          value={info.extraInterests}
        />
        <ProfileReadFormElement title="Логотип" name="logo" type="file" />
      </ProfileSection>
    </form>
  );
}
