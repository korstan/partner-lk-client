import React, { Component } from 'react';
import HomeModalRegisterForm from 'components/Home/Modal/RegisterForm/RegisterForm';

export default class HomeModalRegisterFormContainer extends Component {
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
    const { handleClose } = this.props;
    const { newUser } = this.state;
    return (
      <HomeModalRegisterForm
        handleChange={this.handleInput}
        handleClose={handleClose}
        newUser={newUser}
      />
    );
  }
}
