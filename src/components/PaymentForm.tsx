import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Input from './Input';
import { Button } from './StyledComponents';
import { MastercardIcon, Check, Cancel, VisaIcon } from '../assets/iconpack';
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
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: 0 | 1 }>({
    fullName: 0,
    email: 0,
    phone: 0,
    password: 0,
    cPassword: 0,
    pin: 0,
    exDate: 0
  });

  const toggleTouched = (id: string) => setTouched({ ...touched, [id]: 1 });

  useEffect(() => {
    if (
      isValidName(fullName) &&
      isValidCard(cardNum) &&
      isValidPhone(phone) &&
      isStrongPassword(password) &&
      password === cPassword &&
      isValidPin(pin) &&
      isValidExDate(exDate)
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [fullName, cardNum, email, phone, password, cPassword, pin, exDate]);

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        console.log(true);
      }}
    >
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
          displayicon={touched['fullName']}
          icon={validInput(isValidName(fullName))}
          value={fullName}
          onChange={e => {
            setFullName(e.target.value);
            toggleTouched('fullName');
          }}
        />
        <Input
          placeholder="Email"
          displayicon={touched['email']}
          icon={validInput(isValidEmail(email))}
          onChange={e => {
            setEmail(e.target.value);
            toggleTouched('email');
          }}
        />
        <Input
          placeholder="Phone Number"
          value={phone}
          displayicon={touched['phone']}
          type="text"
          onChange={e => {
            setPhone(e.target.value);
            toggleTouched('phone');
          }}
          icon={validInput(isValidPhone(phone))}
        />
        <Input
          placeholder="Password"
          type="password"
          displayicon={touched['password']}
          value={password}
          onChange={e => {
            setPassword(e.target.value);
            toggleTouched('password');
          }}
          icon={validInput(isStrongPassword(password))}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          value={cPassword}
          displayicon={touched['cPassword']}
          onChange={e => {
            setCPassword(e.target.value);
            toggleTouched('cPassword');
          }}
          icon={validInput(password === cPassword)}
        />
        <Input
          type="text"
          value={cardNum}
          displayicon={1}
          onChange={e => {
            let v = e.target.value;
            setCardNum(pre => insertSpaces(v, pre));
            toggleTouched('cardNum');
          }}
          placeholder="Card Number"
          grayable={isValidCard(cardNum) ? 0 : 1}
          icon={isMaster ? MastercardIcon : VisaIcon}
        />
        <Input
          placeholder="Expiry Date"
          displayicon={touched['exDate']}
          icon={validInput(isValidExDate(exDate))}
          value={exDate}
          onChange={e => {
            let v = e.target.value;
            setExDate(pre => insertSlash(v, pre));
            toggleTouched('exDate');
          }}
        />
        <Input
          placeholder="Card Pin"
          displayicon={touched['pin']}
          type="password"
          icon={validInput(isValidPin(pin))}
          value={pin}
          onChange={e => {
            setPin(insertPin(e.target.value));
            toggleTouched('pin');
          }}
        />
      </section>
      <Button disabled={!valid}>Pay</Button>
    </Form>
  );
};
const Form = styled.form`
  text-align: center;
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
      .icon {
        width: 3rem;
        @media (max-width: 500px) {
          width: 5rem;
        }
      }
    }
  }
`;

export default PaymentForm;
