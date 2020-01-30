import React, { Component } from 'react';
import HomeModalLoginFormInput from 'components/Home/Modal/LoginForm/Input';
import 'components/Home/Modal/LoginForm/LoginForm.css';

export default class HomeModalLoginForm extends Component {
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
    this.handleSwitchToRegisterModal = this.handleSwitchToRegisterModal.bind(this);
  }

  handleSwitchToRegisterModal(e) {
    e.preventDefault();
    this.props.handleSwitchToRegisterModal();
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
          <HomeModalLoginFormInput
            name="email"
            type="text"
            handleChange={this.handleInput}
            placeholder="Введите e-mail"
          />
          <HomeModalLoginFormInput
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
          <button id="login-form__submit-btn" onClick={this.props.handleSubmit}>
            Войти
          </button>
          <span>
            Или <a href="" onClick={this.handleSwitchToRegisterModal}>зарегистрироваться</a>
          </span>
        </form>
      </div>
    );
  }
}
