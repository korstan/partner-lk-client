import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfileReadFormContainer from 'components/Profile/ReadForm/Container';

export default function PageProfileIndex() {
  const history = useHistory();

  return (
    <>
      <h2>Профиль организации</h2>
      <ProfileReadFormContainer
        routeToProfileEdit={() => history.push('/profile/edit')}
      />
    </>
  );
}
