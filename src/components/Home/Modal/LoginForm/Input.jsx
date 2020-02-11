import React from 'react';

export default function HomeModalLoginFormInput(props) {
  return (
    <input
      className="login-form__input"
      id={props.name}
      name={props.name}
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}
