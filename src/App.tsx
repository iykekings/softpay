import React from 'react';
import './App.scss';
import PaymentForm from './components/PaymentForm';
import styled from 'styled-components';

function App() {
  return (
    <Main className="App">
      <Logo>
        <img src="logo192.png" alt="logo" />
      </Logo>
      <div className="wrapper">
        <h1>Pay with Softpay</h1>
        <PaymentForm />
      </div>
    </Main>
  );
}
const Logo = styled.header`
  position: absolute;
  width: 100px;
  top: 10px;
  left: 20px;
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
  &::after {
    content: "";
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
  .wrapper {
    background:#ffffff;
    border-radius: 5px;
    padding: 2rem;
    height: 80vh;
    box-shadow: 2px 2px 13px
    #00000017;
    h1 {
      font-size: 2rem;
      color: #3d4446;
      display: flex;
      align-items: center;
      font-weight: 400;
      margin: 2rem 0px;
    }
  }
`;

export default App;
