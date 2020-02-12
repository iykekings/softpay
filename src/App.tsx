import React from 'react';
import './App.scss';
import MasterCard from './components/MasterCard';
import Visa from './components/Visa';
import styled from 'styled-components';

function App() {
  return (
    <Main className="App">
      <div className="wrapper">

        <h1><img src="logo192.png" alt="logo"
          style={{ width: "10%" }}
        />Pay with Softpay<span aria-label="fire" role="img">🔥</span></h1>
        <section>
          <MasterCard />
          <Visa />
        </section>
      </div>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  &::after {
    content: "";
  background: url(bgx.svg);
  opacity: 0.6;
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
    padding: 4rem 2rem;
    height: 80vh;
    box-shadow: 2px 2px 13px
    #0000003d;
  h1 {
    font-size: x-large;
    display: flex;
    align-items: center;
    font-weight: 500;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0px 20px;
    }
  }
  }
`;

export default App;
