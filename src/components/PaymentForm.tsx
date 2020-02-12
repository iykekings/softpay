import React from 'react'
import Input from './Input'
import { MastercardIcon, Check } from '../assets/iconpack';
import styled from 'styled-components';
import MasterCard from './MasterCard';
import Visa from './Visa';

const PaymentForm = () => {
  return (
    <Form>
      <section id="cards">
        <MasterCard checked={true} />
        <Visa checked={false} />
      </section>
      <section id="inputCollections">
        <Input placeholder="Full Name" icon={Check} iconSize="4rem" />
        <Input placeholder="Email" icon={Check} iconSize="4rem" />
        <Input placeholder="Phone Number" icon={Check} iconSize="4rem" />
        <Input placeholder="Password" type="password" icon={Check} iconSize="4rem" />
        <Input placeholder="Confirm Password" type="password" icon={Check} iconSize="4rem" />

      </section>
      <section id="cardDetails">
        <Input placeholder="Card Number" icon={MastercardIcon} iconSize="8rem" />
        <Input placeholder="Expiry Date" icon={Check} iconSize="4rem" />
        <Input placeholder="Card Pin" icon={Check} iconSize="4rem" />
      </section>
    </Form>
  )
}
const Form = styled.form`
  section#cards {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  section#inputCollections {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    max-width: 630px;
    justify-content: flex-start;

    &>div {
      margin-right: 1rem;
    }
  }
  section#cardDetails {
    display: flex;
    max-width: 630px;
    flex-wrap: wrap;
    justify-content: flex-start;

    &>div {
      margin-right: 1rem;
    }
  }
`;

export default PaymentForm
