import React, { Component } from 'react';
import './LoginForm.css';

export default class LoginForm extends Component {
  render() {
    return (
      <div id="login-form__wrapper" className="modal-content">
        <h2>Вход в личный кабинет</h2>
            <form action="" className="login-form">
                <input type="text" name="" id="" placeholder="Введите e-mail"/>
                <input type="text" name="" id="" placeholder="Введите пароль"/>
                <label htmlFor=""><input type="checkbox"/>Запомнить меня</label>
                <a href="">Забыли пароль</a>
                <button>Войти</button>
                <span>Или <a href="">зарегистрироваться</a></span>
            </form>
      </div>
    );
  }
}
