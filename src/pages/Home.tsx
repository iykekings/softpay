import React from 'react';
import PaymentForm from '../components/PaymentForm';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <h1>Pay with Softpay</h1>
      <PaymentForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 3rem 2rem;
  box-shadow: 2px 2px 13px #00000017;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 2rem;
    align-self: flex-start;
    color: #3d4446;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

export default Home;
