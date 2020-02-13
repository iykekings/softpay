import React from 'react';
import './App.scss';
import styled from 'styled-components';
import { Wrapper } from './components/StyledComponents';

function App() {
  return (
    <Main className="App">
      <Logo>
        <img src="logo192.png" alt="logo" />
      </Logo>
      <Wrapper />
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
  height: 100vh;
  width: 100%;
  @media (max-width: 620px) {
    height: unset;
  }
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
