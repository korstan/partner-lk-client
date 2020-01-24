import React from 'react';

export default function NavbarLink(props) {
  return (
    <li>
      <a href="#" onClick={(e)=>e.preventDefault()}>{props.name}</a>
    </li>
  );
}
