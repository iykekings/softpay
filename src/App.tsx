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
  background: url(bg_func.svg);
  opacity: 0.9;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  }
  .wrapper {
    background:#eae9e9f0;
border-radius: 5px;
padding: 4rem 2rem;
  h1 {
    font-size: 2rem;
    display: flex;
    align-items: center;
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
