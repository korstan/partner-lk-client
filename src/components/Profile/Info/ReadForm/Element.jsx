import React from 'react';

export default function ProfileInfoReadFormElement({title, value}) {
  return (
    <div className="info-section__element">
      <strong>{title}</strong>
      <span>{value}</span>
    </div>
  );
}
