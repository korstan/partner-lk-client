import React from 'react';
import UserPic from './user.png';
import './UserCard.css';

export default function ProfileUserCard({lastname, firstname, patronymic, email}) {
  return (
    <div className="user-card__wrapper">
      <img src={UserPic} alt="User" />
      <div className="user-card__info">
        <span>{`${lastname} ${firstname} ${patronymic}`}</span>
        <span>{`${email}`}</span>
      </div>
    </div>
  );
}
