import React from 'react';
import Header from 'components/UI/Header/Header';
import HeaderNavbar from 'components/UI/Header/Navbar/Navbar';
import HeaderNavbarLink from 'components/UI/Header/Navbar/Link';
import { Switch, Route, useHistory } from 'react-router-dom';
import HomeModal from 'components/Home/Modal/Modal';
import HomeModalLoginFormContainer from 'components/Home/Modal/LoginForm/Container';
import HomeModalRegisterFormContainer from 'components/Home/Modal/RegisterForm/Container';

export default function Index() {
  const history = useHistory();

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
                handleClose={() => history.push('/')}
              />
            </HomeModal>
          </Route>
          <Route path="/login">
            <HomeModal>
              <HomeModalLoginFormContainer
                routeToProfile={() => history.push('/profile')}
                routeToRegister={() => history.push('/register')}
                handleClose={() => history.push('/')}
              />
            </HomeModal>
          </Route>
        </Switch>
      </main>
    </div>
  );
}
