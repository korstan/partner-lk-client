import React from 'react';
import { useHistory } from 'react-router-dom';
import ProfileInfoTabsContainer from 'components/Profile/Info/Tabs/Container';
import ProfileInfoTabsElement from 'components/Profile/Info/Tabs/Element';
import ProfileInfoReadForm from 'components/Profile/Info/ReadForm/ReadForm';
import ProfileInfoContainer from 'components/Profile/Info/Container';

export default function PageProfileIndex() {
  const history = useHistory();

  return (
    <>
      <h2>Профиль организации</h2>
      <ProfileInfoTabsContainer>
        <ProfileInfoTabsElement
          title="Редактировать"
          onClick={() => history.push('/profile/edit')}
        />
      </ProfileInfoTabsContainer>
      <ProfileInfoContainer
        form={info => <ProfileInfoReadForm info={info} />}
      />
    </>
  );
}
