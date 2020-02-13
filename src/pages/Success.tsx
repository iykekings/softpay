import React from 'react';
import styled from 'styled-components';

const Succes = () => {
  return (
    <Wrapper>
      <h1>Welcome to Softcom!</h1>
      <p>payment successfull</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #6c5bcb;
  min-height: 400px;
  border-radius: 5px;
  margin-top: 2rem;
  padding: 3rem 5vw;
  padding-bottom: 1rem;
  box-shadow: 2px 2px 13px #00000017;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    align-self: flex-start;
    color: #ffffff;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  p {
    color: #33cc33;
  }
`;

export default Succes;
