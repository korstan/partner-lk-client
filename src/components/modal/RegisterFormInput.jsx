import React from 'react';

export default function RegisterFormInput(props) {
  return (
    <div className="register-form__group">
      <label htmlFor={props.name} className="register-form__label">
        {props.required && <span style={{ color: 'red' }}>* </span>}
        {props.title}
      </label>
      <input
        className="register-form__input"
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}
