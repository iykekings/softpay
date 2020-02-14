import React from 'react';
import { InputProps } from '../util/interfaces';
import styled from 'styled-components';

const Input = (props: InputProps) => {
  return (
    <Container
      valid={props.valid}
      grayable={props.grayable}
      displayicon={props.displayicon}
      value={props.value}
    >
      <input type="text" {...props} />
      <div className="spacer"></div>
      <div className="icon">{props.icon}</div>
      <p className="error">{props.error}</p>
    </Container>
  );
};
const Container = styled.div<{
  grayable: 0 | 1 | undefined;
  displayicon: 0 | 1 | undefined;
  valid: 0 | 1;
  value: any;
}>`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px #8080801a solid;
  padding: 0.7rem 1rem;
  margin-bottom: 1rem;
  @media (max-width: 500px) {
    margin-bottom: 2rem;
  }
  .spacer {
    flex: 1 1 100%;
  }
  .icon {
    width: 3.2rem;
    height: auto;
    filter: ${props => (props.grayable ? 'grayscale(1)' : 'grayscale(0)')};
    opacity: ${props => (props.displayicon ? '1' : '0')};
    @media (max-width: 620px) {
      width: 2rem;
    }
    @media (max-width: 500px) {
      width: 3rem;
    }
  }
  .error {
    position: absolute;
    font-size: 8px;
    text-align: left;
    color: #f44336;
    opacity: ${props =>
      props.displayicon && props.value && !props.valid ? '1' : '0'};
    left: 0;
    bottom: -1rem;
  }
  input {
    border: none;
    font-size: 1rem;
    color: #3d4446;
    font-weight: 500;
    outline: none;
  }
`;

export default Input;
