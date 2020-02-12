import React from 'react';
import './App.scss';
import MasterCard from './components/MasterCard';
import Visa from './components/Visa';
import styled from 'styled-components';

function App() {
  return (
    <Main className="App">
      <h1><img src="logo192.png" alt="logo"
        style={{ width: "30%" }}
      />Soft Pay</h1>
      <section>
        <MasterCard />
        <Visa />
      </section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #eeeeee;
  h1 {
    font-size: 2rem;
    display: flex;
    align-items: center;
    width: 260px;
    height: 100px;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0px;
    svg {
      margin: 0px 20px;
    }
  }
`;

export default App;
