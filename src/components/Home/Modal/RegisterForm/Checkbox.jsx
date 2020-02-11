import React from 'react';

export default function HomeModalRegisterFormCheckbox(props) {
  return (
    <div className="register-form__group">
      <span className="register-form__label" style={{ color: 'red' }}>{props.required && '*'} </span>
      <label htmlFor={props.name} className="register-form__label-checkbox">
        <input
          id={props.name}
          name={props.name}
          type="checkbox"
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
        {` ${props.title}`}
      </label>
    </div>
  );
}
