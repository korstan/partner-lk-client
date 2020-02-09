import React from 'react';

export default function ProfileInfoTabsElement({title, onClick}) {
  return (
    <button type="button" onClick={onClick} className="info-tabs__element">
      {title}
    </button>
  );
}
