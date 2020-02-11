import React from 'react';

export default function HomeModalRegisterFormInput({
  name,
  required,
  title,
  type,
  value,
  onChange,
  placeholder,
  validation,
}) {
  return (
    <>
      <div className="register-form__group">
        <label htmlFor={name} className="register-form__label">
          {required && <span style={{ color: 'red' }}>* </span>}
          {title}
        </label>
        <input
          className="register-form__input"
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={validation[name].isValid ? null : { borderColor: 'red' }}
        />
      </div>
      <div className="register-form__validation-error">{validation[name].errorMessage }</div>
    </>
  );
}
