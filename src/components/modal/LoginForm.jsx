import React, { Component } from 'react';
import LoginFormInput from './LoginFormInput';
import './LoginForm.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        email: '',
        password: '',
        remember: false,
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div id="login-form__wrapper" className="modal-content">
        <div id="login-form__close-btn" onClick={this.props.handleClose}>
          <span>&times;</span>
        </div>
        <h3>Вход в личный кабинет</h3>
        <form action="" className="login-form">
          <LoginFormInput
            name="email"
            type="text"
            handleChange={this.handleInput}
            placeholder="Введите e-mail"
          />
          <LoginFormInput
            name="password"
            type="password"
            handleChange={this.handleInput}
            placeholder="Введите пароль"
          />
          <div className="login-form__password-options">
            <label htmlFor="">
              <input type="checkbox" />
              Запомнить меня
            </label>
            <a href="">Забыли пароль</a>
          </div>
          <button id="login-form__submit-btn" type="submit" onClick={this.handleSubmit}>
            Войти
          </button>
          <span>
            Или <a href="">зарегистрироваться</a>
          </span>
        </form>
      </div>
    );
  }
}
