import React, { Component } from 'react';
import HomeModalRegisterForm from 'components/Home/Modal/RegisterForm/RegisterForm';
import AuthService from 'services/auth';

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
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
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
    }).then(routeToProfile);
  }

  render() {
    const { handleClose } = this.props;
    const { newUser } = this.state;
    return (
      <HomeModalRegisterForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInput}
        handleClose={handleClose}
        newUser={newUser}
      />
    );
  }
}
