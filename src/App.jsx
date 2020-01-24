import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ isModalVisible: true });
  }

  hideModal() {
    this.setState({ isModalVisible: false });
  }

  render() {
    return (
      <div className="App">
        <Header>
          <Header.Navbar>
            <Header.Navbar.Link name="Регистрация" handleClickEvent={this.showModal} />
            <Header.Navbar.Link name="Войти" handleClickEvent={this.showModal} />
          </Header.Navbar>
        </Header>
        <Modal show={this.state.isModalVisible} handleClickEvent={this.hideModal}>
          <div>
          </div>
        </Modal>
      </div>
    );
  }
}
