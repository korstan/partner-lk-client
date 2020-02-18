import React, { Component } from 'react';
import HomeModalRegisterForm from 'components/Home/Modal/RegisterForm/RegisterForm';
import AuthService from 'services/auth';
import RegisterFormValidator from 'helpers/validateRegisterForm';
import validator from 'validator';

export default class HomeModalRegisterFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        lastname: '',
        firstname: '',
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
      validation: RegisterFormValidator.getInitialObject(),
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target }) {
    const { name } = target;
    const value =
      target.type === 'checkbox'
        ? target.checked
        : validator.trim(target.value);
    this.setState((previousState) => ({
      newUser: {
        ...previousState.newUser,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { newUser } = this.state;
    const validation = RegisterFormValidator.getFullValidationObject(newUser);

    this.setState({
      validation,
    });

    if (!validation.isFormValid) return;

    const { routeToProfile } = this.props;

    AuthService.signUp({
      lastname: newUser.lastname,
      firstname: newUser.firstname,
      patronymic: newUser.patronymic,
      email: newUser.email,
      phone: newUser.phone,
      password: newUser.password,
      organization: newUser.organization,
      inn: newUser.inn,
      position: newUser.position,
    })
      .then(routeToProfile)
      .catch((err) => {
        if (err.status === 400) {
          if (err.name === 'EmailError') {
            alert('Данный e-mail уже зарегистрирован');
          }
          if (err.name === 'InnError') {
            alert('Данный ИНН уже зарегистрирован');
          }
        } else alert('Произошла неизвестная ошибка');
      });
  }

  render() {
    const { handleClose } = this.props;
    const { validation } = this.state;
    return (
      <HomeModalRegisterForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInput}
        handleClose={handleClose}
        validation={validation}
      />
    );
  }
}
