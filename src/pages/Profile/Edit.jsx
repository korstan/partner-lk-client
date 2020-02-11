import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfileEditFormContainer from 'components/Profile/EditForm/Container';

export default function PageProfileEdit() {
  const history = useHistory();

  return (
    <>
      <h2>Редактирование профиля</h2>
      <ProfileEditFormContainer
        routeToProfile={() => history.push('/profile')}
      />
    </>
  );
}
