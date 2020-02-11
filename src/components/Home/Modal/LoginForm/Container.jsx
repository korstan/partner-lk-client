import React, { Component } from 'react';
import HomeModalLoginForm from 'components/Home/Modal/LoginForm/LoginForm';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
        remember: false,
      },
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(previousState => ({
      user: {
        ...previousState.user,
        [name]: value,
      },
    }));
  }

  handleSubmit() {
    this.props.routeToProfile();
  }

  render() {
    const { routeToRegister, handleClose } = this.props;
    return (
      <HomeModalLoginForm
        handleClose={handleClose}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        routeToRegister={routeToRegister}
      />
    );
  }
}
