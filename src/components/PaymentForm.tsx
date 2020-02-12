import React from 'react'
import Input from './Input'
import icons from '../assets/iconpack';
import styled from 'styled-components';
import MasterCard from './MasterCard';
import Visa from './Visa';

const PaymentForm = () => {
  return (
    <Form>
      <section>
        <MasterCard />
        <Visa />
      </section>
      <Input value="Hey Hey" icon={icons.MastercardIcon} iconSize="4rem" />
      <Input value="Pin" icon={icons.Check} iconSize="2rem" />
    </Form>
  )
}
const Form = styled.form`
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

export default PaymentForm
