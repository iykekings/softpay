import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <Wrapper>
      <h1>404: The Page You are looking for doesn't exist</h1>
      <Link to="/">Go back to Homepage?</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ffffff;
  min-height: 400px;
  border-radius: 5px;
  padding: 3rem 2rem;
  box-shadow: 2px 2px 13px #00000017;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    align-self: flex-start;
    color: red;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  a {
    color: #33cc33;
  }
`;

export default NoMatch;
