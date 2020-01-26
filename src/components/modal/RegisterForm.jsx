import React, { Component } from 'react';
import RegisterFormInput from './RegisterFormInput';
import RegisterFormCheckbox from './RegisterFormCheckbox';
import './RegisterForm.css';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        lastName: '',
        firstName: '',
        patronymic: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        organization: '',
        inn: '',
        position: '',
        personalData: false,
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose(e) {
    e.preventDefault();
    this.props.handleClose();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(previousState => ({
      newUser: {
        ...previousState.newUser,
        [name]: value,
      },
    }));
  }

  render() {
    return (
      <div id="register-form__wrapper" className="modal-content">
        <h2>Регистрация в личном кабинете</h2>
        <form action="submit">
          <div className="register-form__row">
            <div className="register-form__column">
              <RegisterFormInput
                name="lastName"
                type="text"
                title="Фамилия"
                required
                placeholder="Введите вашу фамилию"
                handleChange={this.handleInput}
              />
              <RegisterFormInput
                name="firstName"
                type="text"
                title="Имя"
                required
                placeholder="Ваше Имя"
                handleChange={this.handleInput}
              />
              <RegisterFormInput
                name="patronymic"
                type="text"
                title="Отчество"
                placeholder="Ваше Отчество"
                handleChange={this.handleInput}
              />
              <RegisterFormInput
                name="email"
                type="text"
                title="E-mail"
                required
                placeholder="yourorg@domain.ru"
                handleChange={this.handleInput}
              />
              <RegisterFormInput
                name="phone"
                type="text"
                title="Телефон"
                required
                placeholder="7XXXXXXXXXX"
                handleChange={this.handleInput}
              />
            </div>
            <div className="register-form__column">
              <RegisterFormInput
                name="password"
                type="password"
                title="Пароль"
                required
                placeholder="Введите пароль"
                handleChange={this.handleInput}
              />
              <RegisterFormInput
                name="confirmPassword"
                type="password"
                title="Подтверждение"
                required
                placeholder="Введите пароль повторно"
                handleChange={this.handleInput}
              />
              <RegisterFormInput
                name="organization"
                type="text"
                title="Организация"
                required
                placeholder="Название регистрируемой организации"
                handleChange={this.handleInput}
              />
              <RegisterFormInput
                name="inn"
                type="text"
                title="ИНН"
                required
                placeholder="ИНН регистрируемой организации"
                handleChange={this.handleInput}
              />
              <RegisterFormInput
                name="position"
                type="text"
                title="Должность"
                required
                placeholder="Ваша должность в организации"
                handleChange={this.handleInput}
              />
              <RegisterFormCheckbox
                name="personalData"
                type="checkbox"
                title="Я даю согласие на обработку данных"
                handleChange={this.handleInput}
                required
              />
              <div className="register-form__group-btns">
                <input
                  id="register-form__register-btn"
                  className="register-form__btn"
                  type="submit"
                  value="Зарегистрироваться"
                  onClick={this.handleSubmit}
                />
                <button
                  id="register-form__cancel-btn"
                  className="register-form__btn"
                  onClick={this.handleClose}
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
