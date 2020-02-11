import React from 'react';

export default function ProfileEditFormElement({type, name, value, title, onChange}) {
  let inputElement;
  if (type === 'textarea')
    inputElement = (
      <textarea
        name={name}
        id={name}
        value={value}
        rows="5"
        onChange={onChange}
      ></textarea>
    );
  else
    inputElement = (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    );

  return (
    <div className="info-section__element">
      <label htmlFor={name}>
        <strong>{title}</strong>
      </label>
      {inputElement}
    </div>
  );
}
