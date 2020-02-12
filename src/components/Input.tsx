import React from 'react'
import { InputProps } from '../util/interfaces'
import styled from 'styled-components'

const Input = (props: InputProps) => {
  return (
    <Container>
      <input type="text" {...props} />
      <div className="spacer"></div>
      <div className="icon">{props.icon}</div>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px #8080801a solid;
    padding: 0.7rem 1rem;
    margin-bottom: 0.7rem;
    .spacer {
      flex: 1 1 100%;
    }
    .icon {
      width: 4rem;
      height: auto;
      @media(max-width: 620px) {
        width: 2rem;
      }
      @media(max-width: 400px) {
        width: 3rem;
      }
    }
    input {
      border: none;
      font-size: 1rem;
      color: #3d4446;
      font-weight: 500;
      outline: none;
    }
`;

export default Input
