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
          name="phone"
          value={info.phone}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Фактический адрес"
          name="actualAddress"
          value={info.actualAddress}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Страна"
          name="country"
          value={info.country}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Город "
          name="city"
          value={info.city}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Улица"
          name="street"
          value={info.street}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Дом"
          name="building"
          value={info.building}
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Офис"
          name="office"
          value={info.office}
          onChange={handleChange}
        />
      </ProfileSection>
      <ProfileSection title="Дополнительная информация">
        <ProfileEditFormElement
          title="Ссылка на сайт: "
          name="website"
          value={info.website}
          type="textarea"
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Краткое описание"
          name="description"
          value={info.description}
          type="textarea"
          onChange={handleChange}
        />
        <ProfileEditFormElement
          title="Сфера интересов организации"
          name="interests"
          value={info.interests}
          type="textarea"
          onChange={handleChange}
        />
        <ProfileEditFormElement title="Логотип" type="file" />
      </ProfileSection>
    </form>
  );
}
