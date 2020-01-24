import React from 'react';

export default function NavbarLink({ name }) {
  return (
    <li>
      <a href="#" onClick={e => e.preventDefault()}>
        {name}
      </a>
    </li>
  );
}
