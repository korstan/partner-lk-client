import React from 'react';
import HomeModalRegisterFormInput from 'components/Home/Modal/RegisterForm/Input';
import HomeModalRegisterFormCheckbox from 'components/Home/Modal/RegisterForm/Checkbox';
import 'components/Home/Modal/RegisterForm/RegisterForm.css';

export default function HomeModalRegisterForm({
  handleChange,
  handleSubmit,
  handleClose,
  validation,
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
              validation={validation}
            />
            <HomeModalRegisterFormInput
              name="firstname"
              type="text"
              title="Имя"
              required
              placeholder="Ваше Имя"
              onChange={handleChange}
              validation={validation}
            />
            <HomeModalRegisterFormInput
              name="patronymic"
              type="text"
              title="Отчество"
              placeholder="Ваше Отчество"
              onChange={handleChange}
              validation={validation}
            />
            <HomeModalRegisterFormInput
              name="email"
              type="text"
              title="E-mail"
              required
              placeholder="yourorg@domain.ru"
              onChange={handleChange}
              validation={validation}
            />
            <HomeModalRegisterFormInput
              name="phone"
              type="text"
              title="Телефон"
              required
              placeholder="7XXXXXXXXXX"
              onChange={handleChange}
              validation={validation}
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
              validation={validation}
            />
            <HomeModalRegisterFormInput
              name="confirmPassword"
              type="password"
              title="Подтверждение"
              required
              placeholder="Введите пароль повторно"
              onChange={handleChange}
              validation={validation}
            />
            <HomeModalRegisterFormInput
              name="organization"
              type="text"
              title="Организация"
              required
              placeholder="Название регистрируемой организации"
              onChange={handleChange}
              validation={validation}
            />
            <HomeModalRegisterFormInput
              name="inn"
              type="text"
              title="ИНН"
              required
              placeholder="ИНН регистрируемой организации"
              onChange={handleChange}
              validation={validation}
            />
            <HomeModalRegisterFormInput
              name="position"
              type="text"
              title="Должность"
              required
              placeholder="Ваша должность в организации"
              onChange={handleChange}
              validation={validation}
            />
            <HomeModalRegisterFormCheckbox
              name="personalData"
              type="checkbox"
              title="Я даю согласие на обработку данных"
              onChange={handleChange}
              validation={validation}
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
