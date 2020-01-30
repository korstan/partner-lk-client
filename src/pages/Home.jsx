import React, { Component } from 'react';
import Header from 'components/UI/Header/Header';
import HeaderNavbar from 'components/UI/Header/Navbar/Navbar';
import HeaderNavbarLink from 'components/UI/Header/Navbar/Link';
import HomeModal from 'components/Home/Modal/Modal';
import HomeModalRegisterForm from 'components/Home/Modal/RegisterForm/RegisterForm';
import HomeModalLoginForm from 'components/Home/Modal/LoginForm/LoginForm';

export default class PagesHome extends Component {
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
      modalForm: <HomeModalRegisterForm />,
      modalProps: {
        handleSubmit: this.hideModal,
        handleClose: this.hideModal,
      },
    });
  }

  showLoginForm() {
    this.setState({
      isModalVisible: true,
      modalForm: <HomeModalLoginForm />,
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
          <HeaderNavbar>
            <HeaderNavbarLink
              name="Регистрация"
              handleClickEvent={this.showRegisterForm}
            />
            <HeaderNavbarLink
              name="Войти"
              handleClickEvent={this.showLoginForm}
            />
          </HeaderNavbar>
        </Header>
        <HomeModal
          show={this.state.isModalVisible}
          modalProps={this.state.modalProps}
        >
          {this.state.modalForm}
        </HomeModal>
      </div>
    );
  }
}
