import React from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import Header from 'components/UI/Header/Header';
import HeaderNavbar from 'components/UI/Header/Navbar/Navbar';
import HeaderNavbarLink from 'components/UI/Header/Navbar/Link';
import PageProfileEdit from 'pages/Profile/Edit';
import PageProfileIndex from 'pages/Profile/Index';

export default function PageProfile() {
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
            <PageProfileEdit />
          </Route>
          <Route path={match.path}>
            <PageProfileIndex />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
