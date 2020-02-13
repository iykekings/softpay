import React from 'react';
import { Card } from '../util/interfaces';
import { Wrapper, Check } from './StyledComponents';
import { Paycheck } from '../assets/iconpack';
import { generateCardNum } from '../util/strings';

function Visa({ name, number, date, checked, toggle }: Card) {
  const checkedNum = generateCardNum(number);
  return (
    <Wrapper onClick={toggle}>
      <Check style={{ color: checked ? '#33cc33' : 'grey' }}>{Paycheck}</Check>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 600">
        <g transform="translate(-1286 -576)">
          <rect
            width="1050"
            height="600"
            fill="#fff"
            rx="20"
            transform="translate(1286 576)"
          ></rect>
          <path d="M1286 783.383V595.999a20 20 0 0120-20h267.938c7.2 40.587-4.3 93.821-39.185 162.382C1432.76 938.826 1634.906 1006 1506.5 1006c-114.71 0-205.671-99.414-220.5-222.617z"></path>
          <g fill="#eeeeee" transform="translate(2001 898)">
            <circle cx="58.5" cy="58.5" r="58.5" stroke="none"></circle>
            <circle cx="58.5" cy="58.5" r="58" fill="none"></circle>
          </g>
          <text
            fill="#2a2a2a"
            fontFamily="FiraCodeNerdFontComplete-Regular, FiraCode Nerd Font"
            fontSize="60"
            letterSpacing=".078em"
            transform="translate(1783 976)"
          >
            <tspan x="-445.14" y="0">
              X
            </tspan>
            <tspan y="0" fill="#fffdfd">
              XXX
            </tspan>
            <tspan y="0"> XXXX XXXX </tspan>
            <tspan y="0" fill="#2a2a2a">
              {checkedNum.slice(15, 16)}
            </tspan>
            <tspan y="0">{checkedNum.slice(16)}</tspan>
          </text>
          <text
            fill="#2a2a2a"
            fontFamily="Montserrat-Medium, Montserrat"
            fontSize="40"
            fontWeight="500"
            transform="translate(1342 1098)"
          >
            <tspan x="0" y="0">
              {name || 'Your Name'}
            </tspan>
          </text>
          <text
            fill="#2a2a2a"
            fontFamily="Montserrat-Medium, Montserrat"
            fontSize="40"
            fontWeight="500"
            transform="translate(2097 1098)"
          >
            <tspan x="0" y="0">
              {date || '02/23'}
            </tspan>
          </text>
          <g fill="#7563da" stroke="#707070" transform="translate(1712 741)">
            <circle cx="13.5" cy="13.5" r="13.5" stroke="none"></circle>
            <circle cx="13.5" cy="13.5" r="13" fill="none"></circle>
          </g>
          <circle
            cx="13.5"
            cy="13.5"
            r="13.5"
            fill="#eee"
            transform="translate(2033 895)"
          ></circle>
          <circle
            cx="7.5"
            cy="7.5"
            r="7.5"
            fill="#2a2a2a"
            transform="translate(1670 695)"
          ></circle>
          <g fill="#fff">
            <path
              d="M136.828 71.5H1.172L69 .723 136.828 71.5z"
              transform="rotate(-90 1112.5 -204.5)"
            ></path>
            <path
              fill="#707070"
              d="M69 1.445L2.343 71h133.314L69 1.445M69 0l69 72H0L69 0z"
              transform="rotate(-90 1112.5 -204.5)"
            ></path>
          </g>
          <g transform="translate(617 416)">
            <g
              fill="#f5ce85"
              stroke="#967a44"
              strokeWidth="5"
              transform="translate(814 342)"
            >
              <rect width="190" height="162" stroke="none" rx="40"></rect>
              <rect
                width="185"
                height="157"
                x="2.5"
                y="2.5"
                fill="none"
                rx="37.5"
              ></rect>
            </g>
            <path
              fill="#967a44"
              d="M870 502h-28.493l-1.645-3.8h29.94a25.2 25.2 0 100-50.394H818.06l-1.646-3.8h53.585a29 29 0 110 58zM948.416 444H1002l-1.645 3.8h-51.742a25.2 25.2 0 00-9.813 48.417 25.057 25.057 0 009.813 1.983h29.94l-1.646 3.8h-28.491a29.007 29.007 0 01-11.289-55.721A28.811 28.811 0 01948.416 444zM873.542 406.834H819v-3.077h50.363a28.246 28.246 0 008.743-1.355 23.681 23.681 0 007.138-3.7 17.736 17.736 0 004.813-5.486 13.663 13.663 0 000-13.433 17.752 17.752 0 00-4.813-5.486 23.677 23.677 0 00-7.138-3.7 28.247 28.247 0 00-8.743-1.356h-9.923v-3.074h14.1a24.355 24.355 0 018.743 1.6 22.665 22.665 0 017.138 4.358 20.271 20.271 0 014.813 6.463 18.631 18.631 0 010 15.83 20.272 20.272 0 01-4.813 6.463 22.645 22.645 0 01-7.138 4.357 24.355 24.355 0 01-8.741 1.596zM944.874 406.833h54.542v-3.077h-50.363a28.246 28.246 0 01-8.743-1.355 23.681 23.681 0 01-7.138-3.7 17.736 17.736 0 01-4.813-5.486 13.663 13.663 0 010-13.433 17.752 17.752 0 014.813-5.486 23.677 23.677 0 017.138-3.7 28.247 28.247 0 018.743-1.356h9.923v-3.076h-14.1a24.355 24.355 0 00-8.743 1.6 22.665 22.665 0 00-7.138 4.358 20.271 20.271 0 00-4.813 6.463 18.631 18.631 0 000 15.83 20.272 20.272 0 004.813 6.463 22.645 22.645 0 007.137 4.355 24.355 24.355 0 008.742 1.6z"
            ></path>
            <path
              fill="#967a44"
              d="M0 0H5V42H0z"
              transform="translate(862 405)"
            ></path>
            <path
              fill="#967a44"
              d="M0 0H5V42H0z"
              transform="rotate(180 478.208 223.5)"
            ></path>
          </g>
          <path
            fill="#0e4595"
            d="M111.01 192.535l7.275-42.694h11.637l-7.281 42.694zm53.675-41.773a30.05 30.05 0 00-10.429-1.793c-11.5 0-19.6 5.791-19.668 14.09-.065 6.135 5.783 9.557 10.2 11.6 4.53 2.093 6.053 3.428 6.031 5.3-.029 2.862-3.617 4.169-6.962 4.169a24.4 24.4 0 01-10.954-2.24l-1.5-.678-1.633 9.557a36.831 36.831 0 0012.963 2.278c12.233 0 20.174-5.724 20.264-14.587.043-4.857-3.057-8.552-9.771-11.6-4.067-1.975-6.558-3.293-6.532-5.293 0-1.775 2.109-3.672 6.665-3.672a21.469 21.469 0 018.71 1.636l1.043.493 1.577-9.253m29.946-.921h-8.992c-2.785 0-4.87.76-6.093 3.541l-17.283 39.126h12.22s2-5.261 2.449-6.416c1.335 0 13.207.018 14.9.018.348 1.495 1.416 6.4 1.416 6.4h10.8l-9.419-42.668zm-14.267 27.569a7906.17 7906.17 0 004.637-11.935c-.068.114.955-2.472 1.543-4.075l.786 3.681 2.694 12.328h-9.66zm-79.234-27.577l-11.393 29.115-1.214-5.917c-2.121-6.821-8.729-14.21-16.117-17.91l10.418 37.337 12.312-.014 18.321-42.613h-12.327"
            transform="translate(2078.68 457.032)"
          ></path>
          <path
            fill="#f2ae14"
            d="M79.111 149.839H60.346l-.149.888c14.6 3.534 24.258 12.074 28.269 22.337l-4.08-19.62c-.7-2.7-2.747-3.51-5.275-3.6"
            transform="translate(2078.68 457.032)"
          ></path>
        </g>
      </svg>
    </Wrapper>
  );
}

export default Visa;
