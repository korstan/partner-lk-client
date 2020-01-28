import React, { Component } from 'react';
import Header from 'components/header/Header';
import Modal from 'components/modal/Modal';
import RegisterForm from 'components/modal/RegisterForm';
import LoginForm from 'components/modal/LoginForm';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      modalForm: null,
      modalProps: {},
    };

    this.showRegisterForm = this.showRegisterForm.bind(this);
    this.showLoginForm = this.showLoginForm.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showRegisterForm() {
    this.setState({
      isModalVisible: true,
      modalForm: <RegisterForm />,
      modalProps: {
        handleSubmit: this.hideModal,
        handleClose: this.hideModal,
      },
    });
  }

  showLoginForm() {
    this.setState({
      isModalVisible: true,
      modalForm: <LoginForm />,
      modalProps: {
        handleSubmit: e => {
          e.preventDefault();
          window.location.href = `${window.origin}/profile`;
        },
        handleClose: this.hideModal,
        handleSwitchToRegisterModal: this.showRegisterForm,
      },
    });
  }

  showModal() {
    this.setState({ isModalVisible: true });
  }

  hideModal(e) {
    if (e) e.preventDefault();
    this.setState({ isModalVisible: false, modalForm: null });
  }

  render() {
    return (
      <div className="Home">
        <Header>
          <Header.Navbar>
            <Header.Navbar.Link
              name="Регистрация"
              handleClickEvent={this.showRegisterForm}
            />
            <Header.Navbar.Link
              name="Войти"
              handleClickEvent={this.showLoginForm}
            />
          </Header.Navbar>
        </Header>
        <Modal
          show={this.state.isModalVisible}
          modalProps={this.state.modalProps}
        >
          {this.state.modalForm}
        </Modal>
      </div>
    );
  }
}