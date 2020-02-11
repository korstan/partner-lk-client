import React from 'react';
import ProfileSection from 'components/Profile/Section';
import ProfileReadFormElement from 'components/Profile/ReadForm/Element';
import ProfileEditFormElement from 'components/Profile/EditForm/Element';

export default function EditForm({ info, handleChange }) {
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
        <ProfileEditFormElement
          title="Телефон предприятия"
          name="contactPhone"
          value={info.contactPhone}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Фактический адрес"
          name="contactAddress"
          value={info.contactAddress}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Страна"
          name="contactCountry"
          value={info.contactCountry}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Город "
          name="contactCity"
          value={info.contactCity}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Улица"
          name="contactStreet"
          value={info.contactStreet}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Дом"
          name="contactBuilding"
          value={info.contactBuilding}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Офис"
          name="contactOffice"
          value={info.contactOffice}
          onChange={handleChange}
        />
      </ProfileSection>
      <ProfileSection title="Дополнительная информация">
        <ProfileEditFormElement
          title="Ссылка на сайт: "
          name="extraWebsite"
          value={info.extraWebsite}
          type="textarea"
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Краткое описание"
          name="extraAbout"
          value={info.extraAbout}
          type="textarea"
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Сфера интересов организации"
          name="extraInterests"
          value={info.extraInterests}
          type="textarea"
          onChange={handleChange}
        />
        <ProfileEditFormElement title="Логотип" type="file" />
      </ProfileSection>
    </form>
  );
}
