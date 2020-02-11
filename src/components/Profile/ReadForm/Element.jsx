import React from 'react';

export default function ProfileReadFormElement({title, value}) {
  return (
    <div className="info-section__element">
      <strong>{title}</strong>
      <span>{value}</span>
    </div>
  );
}
