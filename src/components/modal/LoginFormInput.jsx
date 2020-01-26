import React from 'react';

export default function LoginFormInput(props) {
  return (
    <input
      className="login-form__input"
      id={props.name}
      name={props.name}
      type={props.type}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  );
}
