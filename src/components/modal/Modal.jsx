import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  render() {
    return (
      <div className="modal hide-modal">
        <section className="modal-content">
          {this.props.children}
        </section>
      </div>
    );
  }
}
