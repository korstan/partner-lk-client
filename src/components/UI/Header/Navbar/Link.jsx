import React from 'react';

export default function HeaderNavbarLink({ name, handleClickEvent }) {
  return (
    <li onClick={handleClickEvent}>
      <a href="#" onClick={e => {e.preventDefault()}}>
        {name}
      </a>
    </li>
  );
} 
