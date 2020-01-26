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
      <div>
        <h2>Регистрация в личном кабинете</h2>
        <form action="submit">
          <div className="form-row">
            <div className="form-column">
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
            <div className="form-column">
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
              <div className="form-group-btns">
                <input
                  id="register-btn"
                  className="btn"
                  type="submit"
                  value="Зарегистрироваться"
                />
                <button
                  id="cancel-btn"
                  className="btn"
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
