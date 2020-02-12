import React from "react";
import { Card } from "../util/interfaces";

function MasterCard({ name, number, date }: Card) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300px"
      height="172px"
      style={{
        boxShadow: "2px 2px 13px #0000002b",
        borderRadius: "5px"
      }}
      viewBox="0 0 1050 600"
    >
      <g transform="translate(-215 -62)">
        <g fill="#fff">
          <path
            d="M136.828 71.5H1.172L69 .723 136.828 71.5z"
            transform="rotate(-90 320 74)"
          ></path>
          <path
            fill="#707070"
            d="M69 1.445L2.343 71h133.314L69 1.445M69 0l69 72H0L69 0z"
            transform="rotate(-90 320 74)"
          ></path>
        </g>
        <g
          fill="#151617"
          stroke="#707070"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(215 62)"
        >
          <rect width="1050" height="600" stroke="none" rx="20"></rect>
          <rect
            width="1049"
            height="599"
            x="0.5"
            y="0.5"
            fill="none"
            rx="19.5"
          ></rect>
        </g>
        <path
          fill="#6c5bcb"
          d="M215 269.383V81.999a20 20 0 0120-20h267.938c7.2 40.587-4.3 93.821-39.185 162.382C361.76 424.826 563.906 492 435.5 492c-114.71 0-205.671-99.414-220.5-222.617z"
        ></path>
        <g fill="#7563da" stroke="#707070" transform="translate(930 384)">
          <circle cx="58.5" cy="58.5" r="58.5" stroke="none"></circle>
          <circle cx="58.5" cy="58.5" r="58" fill="none"></circle>
        </g>
        <text
          fill="#fff"
          fontFamily="FiraCodeNerdFontComplete-Regular, FiraCode Nerd Font"
          fontSize="60"
          letterSpacing=".078em"
          transform="translate(712 462)"
        >
          <tspan x="-445.14" y="0">
            {number || "****  ****  ****  5454"}
          </tspan>
        </text>
        <text
          fill="#fff"
          fontFamily="Montserrat-Medium, Montserrat"
          fontSize="40"
          fontWeight="500"
          transform="translate(271 584)"
        >
          <tspan x="0" y="0">
            {name || "Your Name"}
          </tspan>
        </text>
        <text
          fill="#fff"
          fontFamily="Montserrat-Medium, Montserrat"
          fontSize="40"
          fontWeight="500"
          transform="translate(1026 584)"
        >
          <tspan x="0" y="0">
            {date || "02 / 23"}
          </tspan>
        </text>
        <g fill="#7563da" stroke="#707070" transform="translate(641 227)">
          <circle cx="13.5" cy="13.5" r="13.5" stroke="none"></circle>
          <circle cx="13.5" cy="13.5" r="13" fill="none"></circle>
        </g>
        <circle
          cx="13.5"
          cy="13.5"
          r="13.5"
          fill="#151617"
          transform="translate(962 381)"
        ></circle>
        <g fill="#f6f5fa" stroke="#707070" transform="translate(599 181)">
          <circle cx="7.5" cy="7.5" r="7.5" stroke="none"></circle>
          <circle cx="7.5" cy="7.5" r="7" fill="none"></circle>
        </g>
        <path
          fill="#f90"
          d="M178.062 53.304a53.29 53.29 0 01-106.58.027v-.027a53.29 53.29 0 11106.58-.027z"
          transform="translate(1045.033 91.451) translate(1.967 1.872)"
        ></path>
        <path
          fill="#c00"
          d="M52.947.014a53.291 53.291 0 1036.2 92.7h.011a53.79 53.79 0 005.41-5.706H83.65a52.046 52.046 0 01-3.973-5.489h18.83a53.375 53.375 0 003.1-5.706H76.568a52.562 52.562 0 01-2.227-5.6h29.5a53.526 53.526 0 001.514-28.314H72.776a53.134 53.134 0 011.52-5.6h29.508a53.3 53.3 0 00-2.3-5.706H76.565a51.129 51.129 0 013.058-5.6h18.816a53.406 53.406 0 00-4.136-5.706H83.812a49.458 49.458 0 015.346-5.383A53.1 53.1 0 0053.29.014z"
          transform="translate(1045.033 91.451) translate(1.967 1.872)"
        ></path>
        <path
          fill="#fcb340"
          d="M172.718 81.163a1.771 1.771 0 01.847.223 1.572 1.572 0 01.644.639 1.725 1.725 0 010 1.72 1.6 1.6 0 01-.638.639 1.741 1.741 0 01-1.714 0 1.63 1.63 0 01-.639-.639 1.729 1.729 0 010-1.72 1.6 1.6 0 01.644-.639 1.787 1.787 0 01.849-.223m0 .286a1.472 1.472 0 00-.707.187 1.32 1.32 0 00-.536.534 1.43 1.43 0 00-.2.718 1.461 1.461 0 00.189.715 1.381 1.381 0 00.534.532 1.443 1.443 0 001.43 0 1.363 1.363 0 00.532-.532 1.457 1.457 0 00.188-.715 1.438 1.438 0 00-.193-.718 1.31 1.31 0 00-.538-.534 1.444 1.444 0 00-.7-.187m-.755 2.391v-1.854h.639a1.487 1.487 0 01.472.053.456.456 0 01.233.179.478.478 0 01.087.271.489.489 0 01-.146.354.571.571 0 01-.384.169.539.539 0 01.159.1 2.031 2.031 0 01.274.367l.226.363h-.364l-.164-.292a1.5 1.5 0 00-.313-.432.391.391 0 00-.239-.063h-.176v.788h-.3m.3-1.045h.363a.585.585 0 00.354-.078.253.253 0 00.1-.206.243.243 0 00-.045-.147.28.28 0 00-.128-.1.929.929 0 00-.3-.033h-.339v.561"
          transform="translate(1045.033 91.451) translate(1.967 1.872)"
        ></path>
        <g>
          <path
            fill="#006"
            d="M67.576 27.927l.71-4.824c-.388 0-.958.168-1.462.168-1.975 0-2.222-1.056-2.067-1.827l1.946-9.7h3l.619-5.475h-2.83l.579-3.317h-5.919c-.125.125-3.349 18.658-3.349 20.916 0 3.341 1.875 4.828 4.52 4.8a14.9 14.9 0 004.253-.741zM69.372 18.732c0 8.018 5.292 9.923 9.8 9.923a17.057 17.057 0 006.345-.965l1-5.473a20.559 20.559 0 01-6.376 1.43c-6.093 0-5.025-4.543-5.025-4.543l11.706.035a40.752 40.752 0 00.745-5.174c0-3.739-2.037-8.329-8.267-8.329-5.704.002-9.928 6.15-9.928 13.096zm9.951-8.014c3.2 0 2.611 3.6 2.611 3.891h-6.3c.001-.373.596-3.891 3.689-3.891zM115.253 27.925l1.016-6.185a13.664 13.664 0 01-4.7 1.4c-4.025 0-5.64-3.073-5.64-6.376 0-6.7 3.463-10.384 7.318-10.384a10.1 10.1 0 015.211 1.623l.926-6.01a11.286 11.286 0 00-5.687-1.99c-8.868-.035-13.943 6.139-13.943 16.813 0 7.075 3.758 11.889 10.529 11.889a26.236 26.236 0 004.97-.78zM36.367 5.726a19.594 19.594 0 00-6.873 1.25l-.824 4.888a17.913 17.913 0 016.183-1c2.113 0 3.659.238 3.659 1.955a3.637 3.637 0 01-.189 1.428s-1.667-.139-2.439-.139c-5.539 0-10.059 2.094-10.059 8.406 0 4.976 3.382 6.117 5.478 6.117a6.992 6.992 0 005.68-2.535l-.046 2.1h5l2.229-15.625c-.006-6.632-5.79-6.845-7.799-6.845zm.865 12.688c.109.954-.247 5.465-3.664 5.465a2.067 2.067 0 01-2.22-2.142c0-1.554.844-3.418 5-3.418.97-.005.721.069.884.095zM49.475 28.517c1.278 0 8.584.325 8.584-7.214 0-7.049-6.763-5.656-6.763-8.489 0-1.409 1.1-1.852 3.118-1.852.8 0 3.877.254 3.877.254l.715-5.01a26.466 26.466 0 00-5.235-.446c-4.2 0-8.458 1.676-8.458 7.409 0 6.5 7.1 5.844 7.1 8.581 0 1.827-1.985 1.977-3.515 1.977a18.546 18.546 0 01-5.038-.865l-.757 4.959c.138.042 1.608.696 6.372.696zM162.055 1.181l-1.025 7.645s-2.137-2.95-5.48-2.95c-6.29 0-9.532 6.269-9.532 13.47 0 4.649 2.312 9.206 7.036 9.206a7.094 7.094 0 005.283-2.37l-.25 2.024h5.52l4.334-26.98zm-2.437 14.856c0 3-1.484 7-4.56 7-2.042 0-3-1.715-3-4.4 0-4.4 1.976-7.3 4.47-7.3 2.042-.006 3.09 1.396 3.09 4.7zM5.646 28.226L9.1 7.854l.508 20.371h3.909l7.292-20.371-3.231 20.372h5.809L27.86 1.208l-9.227-.07-5.489 16.542-.15-16.472H4.538L0 28.226h5.646z"
            transform="translate(1045.033 91.451) translate(5.366 41.414) translate(0 1.123)"
          ></path>
          <path
            fill="#006"
            d="M93.066 28.264c1.652-9.391 2.24-16.808 7.056-15.272a32.731 32.731 0 013.094-8.336s-.238-.354-1.727-.354c-2.541 0-5.934 5.157-5.934 5.157l.507-3.188h-5.284l-3.539 21.992h5.827z"
            transform="translate(1045.033 91.451) translate(5.366 41.414) translate(0 1.123)"
          ></path>
          <path
            fill="#006"
            d="M10.545 0a19.6 19.6 0 00-6.874 1.25l-.823 4.888a17.919 17.919 0 016.183-1c2.113 0 3.659.238 3.659 1.955a3.648 3.648 0 01-.188 1.428s-1.667-.139-2.439-.139C4.523 8.382.002 10.476.002 16.79c0 4.976 3.381 6.117 5.477 6.117a6.991 6.991 0 005.679-2.535l-.047 2.1h5l2.228-15.625C18.336.213 12.553 0 10.545 0zm.864 12.688c.108.954-.247 5.465-3.664 5.465a2.067 2.067 0 01-2.22-2.142c0-1.554.843-3.418 5-3.418.969-.005.721.069.884.095z"
            transform="translate(1045.033 91.451) translate(5.366 41.414) translate(0 1.123) translate(116.592 5.726)"
          ></path>
          <path
            fill="#006"
            d="M140.675 28.264c.907-6.909 2.586-16.609 7.055-15.272.691-3.635.025-3.625-1.463-3.625a26.508 26.508 0 00-3.106.093l.508-3.188h-5.284l-3.539 21.993h5.829z"
            transform="translate(1045.033 91.451) translate(5.366 41.414) translate(0 1.123)"
          ></path>
          <g>
            <path
              fill="#fff"
              d="M67.399 27.33l.71-4.823c-.388 0-.959.166-1.462.166-1.975 0-2.193-1.05-2.067-1.827l1.6-9.841h3l.725-5.335h-2.83l.576-3.318h-5.674c-.125.125-3.349 18.658-3.349 20.915 0 3.341 1.876 4.829 4.521 4.8a14.923 14.923 0 004.25-.737zM69.197 18.135c0 8.018 5.293 9.924 9.8 9.924 4.162 0 5.993-.93 5.993-.93l1-5.472a17.668 17.668 0 01-6.025 1.395c-6.093 0-5.026-4.543-5.026-4.543h11.535a40.811 40.811 0 00.745-5.175c0-3.739-1.861-8.294-8.091-8.294-5.708.003-9.931 6.148-9.931 13.095zm9.95-8.014c3.2 0 2.611 3.6 2.611 3.89h-6.3c.001-.368.597-3.89 3.689-3.89zM115.077 27.328l1.015-6.186a13.649 13.649 0 01-4.695 1.4c-4.025 0-5.639-3.073-5.639-6.375 0-6.7 3.463-10.383 7.318-10.383a10.1 10.1 0 015.211 1.623l.926-6.01a20.374 20.374 0 00-6.39-1.392c-6.55 0-12.923 5.682-12.923 16.354 0 7.077 3.441 11.75 10.212 11.75a26.165 26.165 0 004.965-.781zM36.193 5.127a19.6 19.6 0 00-6.873 1.25l-.823 4.888a17.911 17.911 0 016.183-1c2.113 0 3.659.238 3.659 1.955a3.627 3.627 0 01-.189 1.428s-1.667-.14-2.438-.14c-4.907 0-10.062 2.094-10.062 8.408 0 4.975 3.382 6.117 5.478 6.117a7.383 7.383 0 005.821-2.605l-.187 2.168h5l2.229-15.626c-.006-6.629-5.789-6.843-7.798-6.843zm1.216 12.723c.108.954-.6 5.429-4.015 5.429a2.067 2.067 0 01-2.221-2.142c0-1.553.844-3.417 5-3.417a3.61 3.61 0 011.236.13zM49.295 27.919c1.278 0 8.584.325 8.584-7.214 0-7.048-6.763-5.656-6.763-8.487 0-1.41 1.1-1.854 3.117-1.854.8 0 3.877.254 3.877.254l.716-5.01a26.468 26.468 0 00-5.235-.446c-4.2 0-8.458 1.676-8.458 7.409 0 6.5 7.1 5.844 7.1 8.581 0 1.827-1.985 1.975-3.514 1.975a18.527 18.527 0 01-5.036-.866l-.757 4.959c.139.041 1.609.699 6.369.699zM162.077.631l-1.224 7.594s-2.136-2.95-5.479-2.95c-5.2 0-9.532 6.268-9.532 13.47 0 4.649 2.311 9.2 7.036 9.2a7.1 7.1 0 005.283-2.37l-.25 2.024h5.519L167.765.617zm-2.635 14.807c0 3-1.484 7-4.56 7-2.042 0-3-1.714-3-4.4 0-4.4 1.976-7.3 4.469-7.3 2.044-.006 3.091 1.397 3.091 4.7zM5.471 27.628l3.454-20.37.505 20.37h3.909l7.291-20.37-3.227 20.37h5.809L27.685.61h-8.982l-5.594 16.577L12.818.61h-8.28L0 27.628zM92.891 27.665c1.652-9.392 1.958-17.018 5.9-15.622a21.83 21.83 0 012.109-6.58 5.983 5.983 0 00-1.094-.074c-2.541 0-4.424 3.472-4.424 3.472l.506-3.188h-5.283l-3.541 21.992z"
              transform="translate(1045.033 91.451) translate(5.366 41.414) translate(1.655)"
            ></path>
            <path
              fill="#fff"
              d="M10.544 0a19.6 19.6 0 00-6.873 1.25l-.823 4.888a17.911 17.911 0 016.183-1c2.113 0 3.657.238 3.657 1.955a3.648 3.648 0 01-.188 1.428s-1.667-.14-2.439-.14C5.154 8.381 0 10.475 0 16.789c0 4.975 3.381 6.117 5.477 6.117a7.38 7.38 0 005.82-2.605l-.186 2.168h5l2.228-15.626C18.337.214 12.553 0 10.544 0zm1.217 12.723c.108.954-.6 5.429-4.016 5.429a2.066 2.066 0 01-2.219-2.142c0-1.553.844-3.417 5-3.417a3.632 3.632 0 011.237.13z"
              transform="translate(1045.033 91.451) translate(5.366 41.414) translate(1.655) translate(117.625 5.127)"
            ></path>
            <path
              fill="#fff"
              d="M5.826 22.276c1.652-9.392 1.958-17.018 5.9-15.622a21.874 21.874 0 012.11-6.58A5.984 5.984 0 0012.742 0c-2.541 0-4.424 3.472-4.424 3.472L8.824.284H3.541L.002 22.277z"
              transform="translate(1045.033 91.451) translate(5.366 41.414) translate(1.655) translate(134.702 5.389)"
            ></path>
            <path
              fill="#fff"
              d="M167.642 24.272a1.739 1.739 0 01.846.224 1.559 1.559 0 01.645.637 1.726 1.726 0 010 1.719 1.6 1.6 0 01-.637.639 1.741 1.741 0 01-1.716 0 1.611 1.611 0 01-.636-.639 1.72 1.72 0 010-1.719 1.582 1.582 0 01.645-.637 1.763 1.763 0 01.849-.224m0 .284a1.46 1.46 0 00-.707.188 1.313 1.313 0 00-.538.532 1.439 1.439 0 00-.005 1.433 1.371 1.371 0 00.536.533 1.45 1.45 0 001.429 0 1.364 1.364 0 00.532-.533 1.439 1.439 0 000-1.433 1.3 1.3 0 00-.538-.532 1.448 1.448 0 00-.7-.188m-.755 2.391v-1.85h.638a1.5 1.5 0 01.472.053.455.455 0 01.233.179.471.471 0 01.088.271.491.491 0 01-.147.354.562.562 0 01-.383.168.569.569 0 01.158.1 2.2 2.2 0 01.274.367l.227.363h-.372l-.163-.292a1.5 1.5 0 00-.313-.432.384.384 0 00-.24-.064h-.175v.788h-.3m.3-1.043h.363a.579.579 0 00.354-.078.251.251 0 00.1-.206.243.243 0 00-.045-.146.275.275 0 00-.128-.1.943.943 0 00-.3-.032h-.34v.559"
              transform="translate(1045.033 91.451) translate(5.366 41.414) translate(1.655)"
            ></path>
          </g>
        </g>
        <g fill="#fff">
          <path
            d="M136.828 71.5H1.172L69 .723 136.828 71.5z"
            transform="rotate(-90 325.5 69.5)"
          ></path>
          <path
            fill="#707070"
            d="M69 1.445L2.343 71h133.314L69 1.445M69 0l69 72H0L69 0z"
            transform="rotate(-90 325.5 69.5)"
          ></path>
        </g>
        <g transform="translate(-444 -97)">
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
      </g>
    </svg>
  );
}

export default MasterCard;