import React from 'react';

export default function HomeModalRegisterFormCheckbox({
  required,
  name,
  onChange,
  placeholder,
  title,
  validation,
}) {
  return (
    <>
      <div className="register-form__group">
        <span className="register-form__label" style={{ color: 'red' }}>
          {required && '*'}{' '}
        </span>
        <label htmlFor={name} className="register-form__label-checkbox">
          <input
            id={name}
            name={name}
            type="checkbox"
            onChange={onChange}
            placeholder={placeholder}
          />
          {` ${title}`}
        </label>
      </div>
      <div className="register-form__validation-error">
        {validation[name].errorMessage}
      </div>
    </>
  );
}
