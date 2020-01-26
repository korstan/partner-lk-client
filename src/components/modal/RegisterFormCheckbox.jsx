import React from 'react';

export default function RegisterFormCheckbox(props) {
  return (
    <div className="form-group-checkbox">
      <span className="form-label" style={{ color: 'red' }}>{props.required && '*'} </span>
      <label htmlFor={props.name} className="form-label-checkbox">
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
