import React from 'react';
import styled from 'styled-components';
import Home from './pages/Home';
import { Switch, Route, Link } from 'react-router-dom';
import Succes from './pages/Success';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Main className="App">
      <Link to="/">
        <Logo>
          <img src="logo192.png" alt="logo" />
        </Logo>
      </Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/success">
          <Succes />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Main>
  );
}

const Logo = styled.header`
  position: absolute;
  width: 100px;
  top: 10px;
  left: 5px;
  @media (max-width: 620px) {
    width: 40px;
  }
  img {
    width: 100%;
  }
`;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  width: 100%;
  /* @media (max-width: 620px) {
    height: unset;
    min-height: 100vh;
  } */
  &::after {
    content: '';
    background: url(bg.svg);
    opacity: 0.2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export default App;
