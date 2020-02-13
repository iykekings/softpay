import styled from 'styled-components';

const Check = styled.div`
  width: 1rem;
  position: absolute;
  top: 4px;
  left: 4px;
`;

const Wrapper = styled.div`
  position: relative;
  box-shadow: 2px 2px 13px #00000014;
  border-radius: 5px;
  width: 230px;
  height: 132px;
`;

const Button = styled.button`
  background: #6b5bcb;
  color: white;
  border: none;
  outline: none;
  filter: ${props => (props.disabled ? 'grayscale(0.8)' : 'grayscale(0)')};
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.3rem 1.5rem;
  border-radius: 4px;
  &:hover {
    background: #5339eb;
  }
`;

export { Check, Wrapper, Button };
