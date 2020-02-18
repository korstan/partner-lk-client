import React, { Component } from 'react';
import HomeModalLoginForm from 'components/Home/Modal/LoginForm/LoginForm';
import AuthService from 'services/auth';

export default class HomeModalLoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
        remember: false,
      },
      error: null,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((previousState) => ({
      user: {
        ...previousState.user,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state.user;
    AuthService.signIn(email, password)
      .then(this.props.routeToProfile)
      .catch((err) => {
        if (err.status === 400) this.setState({ error: 'Неверный e-mail или пароль' });
        else this.setState({ error: 'Ошибка сервера' });
      });
  }

  render() {
    const { routeToRegister, handleClose } = this.props;
    const { error } = this.state;
    return (
      <HomeModalLoginForm
        handleClose={handleClose}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        error={error}
        routeToRegister={routeToRegister}
      />
    );
  }
}
