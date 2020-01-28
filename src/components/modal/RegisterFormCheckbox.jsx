import React from 'react';

export default function RegisterFormCheckbox(props) {
  return (
    <div className="register-form__group-checkbox" style={props.validated ? null : { border: '2px dotted red' }}>
      <span className="register-form__label" style={{ color: 'red' }}>{props.required && '*'} </span>
      <label htmlFor={props.name} className="register-form__label-checkbox">
        <input
          id={props.name}
          name={props.name}
          type="checkbox"
          onChange={props.handleChange}
          placeholder={props.placeholder}
        />
        {` ${props.title}`}
      </label>
    </div>
  );
}
