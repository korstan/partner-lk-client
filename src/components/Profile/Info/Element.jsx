import React, { Component } from 'react';

export default class ProfileInfoElement extends Component {
  renderEditableElement() {
    let inputElement;
    if (this.props.type === 'textarea')
      inputElement = (
        <textarea
          name={this.props.name}
          id={this.props.name}
          value={this.props.value}
          rows="5"
        ></textarea>
      );
    else
      inputElement = (
        <input
          type={this.props.type}
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
        />
      );

    return (
      <div className="info-section__element">
        <label htmlFor={this.props.name}>
          <strong>{this.props.title}</strong>
        </label>
        {inputElement}
      </div>
    );
  }

  renderReadonlyElement() {
    return (
      <div className="info-section__element">
        <strong>{this.props.title}</strong>
        <span>{this.props.value}</span>
      </div>
    );
  }

  render() {
    return this.props.enableEditMode
      ? this.renderEditableElement()
      : this.renderReadonlyElement();
  }
}
