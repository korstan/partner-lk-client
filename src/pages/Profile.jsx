import React from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import Header from 'components/UI/Header/Header';
import HeaderNavbar from 'components/UI/Header/Navbar/Navbar';
import HeaderNavbarLink from 'components/UI/Header/Navbar/Link';
import ProfileInfoTabsContainer from 'components/Profile/Info/Tabs/Container';
import ProfileInfoTabsElement from 'components/Profile/Info/Tabs/Element';
import ProfileInfoReadForm from 'components/Profile/Info/ReadForm/ReadForm';
import ProfileInfoContainer from 'components/Profile/Info/Container';
import ProfileInfoEditForm from 'components/Profile/Info/EditForm/EditForm';

export default function Profile() {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <div className="profile">
      <Header>
        <HeaderNavbar>
          <HeaderNavbarLink
            name="Выйти"
            handleClickEvent={() => history.push('/')}
          />
        </HeaderNavbar>
      </Header>
      <main>
        <Switch>
          <Route path={`${match.path}/edit`}>
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
          </Route>
          <Route path={match.path}>
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
          </Route>
        </Switch>
      </main>
    </div>
  );
}
