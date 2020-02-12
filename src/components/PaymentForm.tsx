import React, { useState } from 'react'
import Input from './Input'
import { MastercardIcon, Check, Cancel } from '../assets/iconpack';
import styled from 'styled-components';
import MasterCard from './MasterCard';
import Visa from './Visa';

const PaymentForm = () => {
  const [isMaster, setIsMaster] = useState(true);
  const switchCard = () => setIsMaster(!isMaster);
  return (
    <Form>
      <section id="cards">
        <MasterCard checked={isMaster} toggle={switchCard} />
        <Visa checked={!isMaster} toggle={switchCard} />
      </section>
      <section id="inputCollections">
        <Input placeholder="Full Name" icon={Check} />
        <Input placeholder="Email" icon={Check} />
        <Input placeholder="Phone Number" icon={Check} />
        <Input placeholder="Password" type="password" icon={Check} />
        <Input placeholder="Confirm Password" type="password" icon={Check} />
        <Input id="card_number" placeholder="Card Number" icon={MastercardIcon} />
        <Input placeholder="Expiry Date" icon={Check} />
        <Input placeholder="Card Pin" icon={Cancel} />
      </section>
    </Form>
  )
}
const Form = styled.form`
  section#cards {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    @media(max-width: 620px) {
      &>div {
        margin-bottom: 1rem;
      }
    }
  }
  section#inputCollections {
    margin-top: 2rem;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    max-width: 630px;
    justify-content: flex-start;

    @media(max-width: 620px) {
      display: flex;
      flex-direction: column;
      
    }

    & > :nth-child(6) {
      grid-column: 1/-1;
    }
  }
`;

export default PaymentForm
