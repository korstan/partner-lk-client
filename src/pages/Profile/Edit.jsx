import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfileInfoTabsContainer from 'components/Profile/Info/Tabs/Container';
import ProfileInfoTabsElement from 'components/Profile/Info/Tabs/Element';
import ProfileInfoContainer from 'components/Profile/Info/Container';
import ProfileInfoEditForm from 'components/Profile/Info/EditForm/EditForm';

export default function PageProfileEdit() {
  const history = useHistory();

  return (
    <>
      <h2>Редактирование профиля</h2>
      <ProfileInfoTabsContainer>
        <ProfileInfoTabsElement
          title="Cохранить"
          onClick={() => history.push('/profile')}
        />
        <ProfileInfoTabsElement
          title="Отмена"
          onClick={() => history.push('/profile')}
        />
      </ProfileInfoTabsContainer>
      <ProfileInfoContainer
        form={info => <ProfileInfoEditForm info={info} />}
      />
    </>
  );
}
