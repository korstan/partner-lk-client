import React from 'react';
import HomeModalLoginFormInput from 'components/Home/Modal/LoginForm/Input';
import 'components/Home/Modal/LoginForm/LoginForm.css';

export default function LoginForm({
  routeToRegister,
  handleInput,
  handleSubmit,
  handleClose,
  error,
}) {
  return (
    <div id="login-form__wrapper" className="modal-content">
      <div id="login-form__close-btn" onClick={handleClose}>
        <span>&times;</span>
      </div>
      <h3>Вход в личный кабинет</h3>
      <form action="" className="login-form">
        <HomeModalLoginFormInput
          name="email"
          type="text"
          onChange={handleInput}
          placeholder="Введите e-mail"
        />
        <HomeModalLoginFormInput
          name="password"
          type="password"
          onChange={handleInput}
          placeholder="Введите пароль"
        />
        <div className="login-form__password-options">
          <label htmlFor="">
            <input onChange={handleInput} name="remember" type="checkbox" />
            Запомнить меня
          </label>
          <a href="">Забыли пароль</a>
        </div>
        <span style={{textAlign:'center', color: 'red'}}>{error}</span>
        <button id="login-form__submit-btn" onClick={handleSubmit}>
          Войти
        </button>
        <span>
          Или{' '}
          <a href="" onClick={routeToRegister}>
            зарегистрироваться
          </a>
        </span>
      </form>
    </div>
  );
}
