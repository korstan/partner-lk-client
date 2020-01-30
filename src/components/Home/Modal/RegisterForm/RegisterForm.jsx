import React, { Component } from 'react';
import HomeModalRegisterFormInput from 'components/Home/Modal/RegisterForm/Input';
import HomeModalRegisterFormCheckbox from 'components/Home/Modal/RegisterForm/Checkbox';
import Validator from 'validator';
import 'components/Home/Modal/RegisterForm/RegisterForm.css';

const validator = {
  lastName: value => value && Validator.isAlpha(value, 'ru-RU'),
  firstName: value => value && Validator.isAlpha(value, 'ru-RU'),
  patronymic: value => Validator.isAlpha(value, 'ru-RU') || value === '',
  email: value => Validator.isEmail(value),
  phone: value => Validator.isMobilePhone(value, 'ru-RU'),
  password: value => value.length >= 8 && !Validator.isNumeric(value),
  confirmPassword: value => value.length >= 8 && !Validator.isNumeric(value),
  organization: value => value,
  inn: value => value.length === 12 && Validator.isNumeric(value),
  position: value => value,
  personalData: value => value,
};

export default class HomeModalRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        lastName: { value: '', validated: true },
        firstName: { value: '', validated: true },
        patronymic: { value: '', validated: true },
        email: { value: '', validated: true },
        phone: { value: '', validated: true },
        password: { value: '', validated: true },
        confirmPassword: { value: '', validated: true },
        organization: { value: '', validated: true },
        inn: { value: '', validated: true },
        position: { value: '', validated: true },
        personalData: { value: '', validated: false },
      },
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const validated = validator[name](value);
    this.setState(previousState => ({
      newUser: {
        ...previousState.newUser,
        [name]: { value, validated },
      },
    }));
  }

  render() {
    const passwordsAreEqual = this.state.newUser.password.value === this.state.newUser.confirmPassword.value;

    return (
      <div id="register-form__wrapper" className="modal-content">
        <h2>Регистрация в личном кабинете</h2>
        <form action="submit">
          <div className="register-form__row">
            <div className="register-form__column">
              <HomeModalRegisterFormInput
                name="lastName"
                type="text"
                title="Фамилия"
                required
                placeholder="Введите вашу фамилию"
                validated={this.state.newUser.lastName.validated}
                handleChange={this.handleInput}
              />
              <HomeModalRegisterFormInput
                name="firstName"
                type="text"
                title="Имя"
                required
                placeholder="Ваше Имя"
                validated={this.state.newUser.firstName.validated}
                handleChange={this.handleInput}
              />
              <HomeModalRegisterFormInput
                name="patronymic"
                type="text"
                title="Отчество"
                placeholder="Ваше Отчество"
                validated={this.state.newUser.patronymic.validated}
                handleChange={this.handleInput}
              />
              <HomeModalRegisterFormInput
                name="email"
                type="text"
                title="E-mail"
                required
                placeholder="yourorg@domain.ru"
                validated={this.state.newUser.email.validated}
                handleChange={this.handleInput}
              />
              <HomeModalRegisterFormInput
                name="phone"
                type="text"
                title="Телефон"
                required
                placeholder="7XXXXXXXXXX"
                validated={this.state.newUser.phone.validated}
                handleChange={this.handleInput}
              />
            </div>
            <div className="register-form__column">
              <HomeModalRegisterFormInput
                name="password"
                type="password"
                title="Пароль"
                required
                placeholder="Введите пароль"
                validated={this.state.newUser.password.validated && passwordsAreEqual}
                handleChange={this.handleInput}
              />
              <HomeModalRegisterFormInput
                name="confirmPassword"
                type="password"
                title="Подтверждение"
                required
                placeholder="Введите пароль повторно"
                validated={this.state.newUser.confirmPassword.validated && passwordsAreEqual}
                handleChange={this.handleInput}
              />
              <HomeModalRegisterFormInput
                name="organization"
                type="text"
                title="Организация"
                required
                placeholder="Название регистрируемой организации"
                validated={this.state.newUser.organization.validated}
                handleChange={this.handleInput}
              />
              <HomeModalRegisterFormInput
                name="inn"
                type="text"
                title="ИНН"
                required
                placeholder="ИНН регистрируемой организации"
                validated={this.state.newUser.inn.validated}
                handleChange={this.handleInput}
              />
              <HomeModalRegisterFormInput
                name="position"
                type="text"
                title="Должность"
                required
                placeholder="Ваша должность в организации"
                validated={this.state.newUser.position.validated}
                handleChange={this.handleInput}
              />
              <HomeModalRegisterFormCheckbox
                name="personalData"
                type="checkbox"
                title="Я даю согласие на обработку данных"
                validated={this.state.newUser.personalData.validated}
                handleChange={this.handleInput}
                required
              />
              <div className="register-form__group-btns">
                <input
                  id="register-form__register-btn"
                  className="register-form__btn"
                  type="submit"
                  value="Зарегистрироваться"
                  onClick={this.props.handleSubmit}
                />
                <button
                  id="register-form__cancel-btn"
                  className="register-form__btn"
                  onClick={this.props.handleClose}
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
}
