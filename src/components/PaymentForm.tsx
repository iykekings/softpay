import React, { useState } from 'react';
import Input from './Input';
import { MastercardIcon, Check, Cancel, VisaIcon } from '../assets/iconpack';
import styled from 'styled-components';
import MasterCard from './MasterCard';
import Visa from './Visa';
import {
  insertSpaces,
  isValidEmail,
  isValidName,
  isValidPhone,
  isStrongPassword,
  isValidPin,
  insertSlash,
  isValidExDate,
  insertPin,
  isValidCard
} from '../util/strings';

const validInput = (state: boolean) => (state ? Check : Cancel);

const PaymentForm = () => {
  const switchCard = () => setIsMaster(!isMaster);

  // switches cards
  const [isMaster, setIsMaster] = useState(true);
  const [fullName, setFullName] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [pin, setPin] = useState('');
  const [exDate, setExDate] = useState('');

  return (
    <Form>
      <section id="cards">
        <MasterCard
          checked={isMaster}
          toggle={switchCard}
          name={fullName}
          number={cardNum}
          date={exDate}
        />
        <Visa
          checked={!isMaster}
          toggle={switchCard}
          name={fullName}
          number={cardNum}
          date={exDate}
        />
      </section>
      <section id="inputCollections">
        <Input
          placeholder="Full Name"
          icon={validInput(isValidName(fullName))}
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <Input
          placeholder="Email"
          icon={validInput(isValidEmail(email))}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          value={phone}
          type="text"
          onChange={e => setPhone(e.target.value)}
          icon={validInput(isValidPhone(phone))}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          icon={validInput(isStrongPassword(password))}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          value={cPassword}
          onChange={e => setCPassword(e.target.value)}
          icon={validInput(password === cPassword)}
        />
        <Input
          id="card_number"
          type="text"
          value={cardNum}
          onChange={e => {
            let v = e.target.value;
            setCardNum(pre => insertSpaces(v, pre));
          }}
          placeholder="Card Number"
          grayable={isValidCard(cardNum) ? 0 : 1}
          icon={isMaster ? MastercardIcon : VisaIcon}
        />
        <Input
          placeholder="Expiry Date"
          icon={validInput(isValidExDate(exDate))}
          value={exDate}
          onChange={e => {
            let v = e.target.value;
            setExDate(pre => insertSlash(v, pre));
          }}
        />
        <Input
          placeholder="Card Pin"
          type="password"
          icon={validInput(isValidPin(pin))}
          value={pin}
          onChange={e => setPin(insertPin(e.target.value))}
        />
      </section>
    </Form>
  );
};
const Form = styled.form`
  section#cards {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    @media (max-width: 620px) {
      & > div {
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

    @media (max-width: 620px) {
      display: flex;
      flex-direction: column;
    }

    & > :nth-child(6) {
      grid-column: 1/-1;
    }
  }
`;

export default PaymentForm;
