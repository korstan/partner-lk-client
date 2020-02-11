import React from 'react';
import Header from 'components/shared/Header/Header';
import HeaderNavbar from 'components/shared/Header/Navbar/Navbar';
import HeaderNavbarLink from 'components/shared/Header/Navbar/Link';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomeModal from 'components/Home/Modal/Modal';
import HomeModalLoginFormContainer from 'components/Home/Modal/LoginForm/Container';
import HomeModalRegisterFormContainer from 'components/Home/Modal/RegisterForm/Container';

export default function Index() {
  const history = useHistory();
  const routeTo = (route) => () => history.push(route);
  return (
    <div className="Home">
      <Header>
        <HeaderNavbar>
          <HeaderNavbarLink
            name="Регистрация"
            handleClickEvent={() => history.push('/register')}
          />
          <HeaderNavbarLink
            name="Войти"
            handleClickEvent={() => history.push('/login')}
          />
        </HeaderNavbar>
      </Header>
      <main>
        <Switch>
          <Route path="/register">
            <HomeModal>
              <HomeModalRegisterFormContainer
                routeToProfile={routeTo('/profile')}
                handleClose={routeTo('/')}
              />
            </HomeModal>
          </Route>
          <Route path="/login">
            <HomeModal>
              <HomeModalLoginFormContainer
                routeToProfile={routeTo('/profile')}
                routeToRegister={routeTo('/register')}
                handleClose={routeTo('/')}
              />
            </HomeModal>
          </Route>
        </Switch>
      </main>
    </div>
  );
}
