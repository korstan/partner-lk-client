import React from 'react';
import HomeModalRegisterFormInput from 'components/Home/Modal/RegisterForm/Input';
import HomeModalRegisterFormCheckbox from 'components/Home/Modal/RegisterForm/Checkbox';
// import Validator from 'validator';
import 'components/Home/Modal/RegisterForm/RegisterForm.css';

// const validator = {
//   lastName: value => value && Validator.isAlpha(value, 'ru-RU'),
//   firstName: value => value && Validator.isAlpha(value, 'ru-RU'),
//   patronymic: value => Validator.isAlpha(value, 'ru-RU') || value === '',
//   email: value => Validator.isEmail(value),
//   phone: value => Validator.isMobilePhone(value, 'ru-RU'),
//   password: value => value.length >= 8 && !Validator.isNumeric(value),
//   confirmPassword: value => value.length >= 8 && !Validator.isNumeric(value),
//   organization: value => value,
//   inn: value => value.length === 12 && Validator.isNumeric(value),
//   position: value => value,
//   personalData: value => value,
// };

export default function HomeModalRegisterForm({
  handleChange,
  handleSubmit,
  handleClose,
}) {
  return (
    <div id="register-form__wrapper" className="modal-content">
      <h2>Регистрация в личном кабинете</h2>
      <form action="submit">
        <div className="register-form__row">
          <div className="register-form__column">
            <HomeModalRegisterFormInput
              name="lastname"
              type="text"
              title="Фамилия"
              required
              placeholder="Введите вашу фамилию"
              onChange={handleChange}
            />
            <HomeModalRegisterFormInput
              name="firstname"
              type="text"
              title="Имя"
              required
              placeholder="Ваше Имя"
              onChange={handleChange}
            />
            <HomeModalRegisterFormInput
              name="patronymic"
              type="text"
              title="Отчество"
              placeholder="Ваше Отчество"
              onChange={handleChange}
            />
            <HomeModalRegisterFormInput
              name="email"
              type="text"
              title="E-mail"
              required
              placeholder="yourorg@domain.ru"
              onChange={handleChange}
            />
            <HomeModalRegisterFormInput
              name="phone"
              type="text"
              title="Телефон"
              required
              placeholder="7XXXXXXXXXX"
              onChange={handleChange}
            />
          </div>
          <div className="register-form__column">
            <HomeModalRegisterFormInput
              name="password"
              type="password"
              title="Пароль"
              required
              placeholder="Введите пароль"
              onChange={handleChange}
            />
            <HomeModalRegisterFormInput
              name="confirmPassword"
              type="password"
              title="Подтверждение"
              required
              placeholder="Введите пароль повторно"
              onChange={handleChange}
            />
            <HomeModalRegisterFormInput
              name="organization"
              type="text"
              title="Организация"
              required
              placeholder="Название регистрируемой организации"
              onChange={handleChange}
            />
            <HomeModalRegisterFormInput
              name="inn"
              type="text"
              title="ИНН"
              required
              placeholder="ИНН регистрируемой организации"
              onChange={handleChange}
            />
            <HomeModalRegisterFormInput
              name="position"
              type="text"
              title="Должность"
              required
              placeholder="Ваша должность в организации"
              onChange={handleChange}
            />
            <HomeModalRegisterFormCheckbox
              name="personalData"
              type="checkbox"
              title="Я даю согласие на обработку данных"
              onChange={handleChange}
              required
            />
            <div className="register-form__group-btns">
              <input
                id="register-form__register-btn"
                className="register-form__btn"
                type="submit"
                value="Зарегистрироваться"
                onClick={handleSubmit}
              />
              <button
                id="register-form__cancel-btn"
                className="register-form__btn"
                onClick={handleClose}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
