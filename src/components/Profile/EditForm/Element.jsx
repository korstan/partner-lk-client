import React from 'react';

export default function ProfileEditFormElement({type, name, value, title}) {
  let inputElement;
  if (type === 'textarea')
    inputElement = (
      <textarea
        name={name}
        id={name}
        value={value}
        rows="5"
      ></textarea>
    );
  else
    inputElement = (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
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
