import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export const Blocky = ({ color }) => {
  return (
    <Wrapper>
      <Character>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="127.433"
          height="132.743"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 127.433 132.743"
          xmlSpace="preserve"
        >
          <rect
            width="127.433"
            height="132.743"
            stroke="#4e4b5c"
            fill={`#${color}`}
            strokeWidth="8px"
          />

          <circle cx="86.238" cy="57.885" r="6.667" fill="#4e4b5c" />
          <circle cx="40.072" cy="57.885" r="6.667" fill="#4e4b5c" />
          <path
            fill="#4e4b5c"
            d="M71.916 62.782a2.004 2.004 0 00-3.584-1.324c-.758.766-2.483 2.235-4.696 2.358-1.696.094-3.438-.625-5.191-2.137a.106.106 0 00-.011-.009l.002.005a1.988 1.988 0 00-1.235-.509 2.002 2.002 0 00-1.208 3.666l-.003-.001c2.221 1.871 4.536 2.88 6.912 2.986.333.014.67.012 1.007-.01 3.163-.191 5.572-1.942 6.888-3.166l.452-.453c.021-.019.04-.041.06-.061l.034-.034-.021.02c.344-.342.57-.806.594-1.331z"
          />
        </svg>
      </Character>

      <Shadow>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="122.436"
          height="39.744"
          x="61"
          y="20"
          version="1.1"
          viewBox="0 0 122.436 39.744"
          xmlSpace="preserve"
        >
          <ellipse cx="61.128" cy="19.872" fill="#4e4b5c" fillOpacity={0.5} rx="49.25" ry="8.916" />
        </svg>
      </Shadow>
    </Wrapper>
  );
};

const float = keyframes`
 50% {
     transform: translate(0, 20px);
  }
`;

const shrink = keyframes`
    0% {
      width: 90%;
      margin: 0 5%;
    }
    50% {
      width: 60%;
      margin: 0 18%;
    }
    100% {
      width: 90%;
      margin: 0 5%;
    }
    `;

const Wrapper = styled.div`
  width: 130px;
  margin: 0 auto;
`;

const Character = styled.div`
  animation: ${float} 3s ease-out infinite;
  width: 130px;
`;

const Shadow = styled.div`
  width: 130px;
  margin-top: 15px;
  svg {
    animation: ${shrink} 3s ease-out infinite;
    transform-origin: center center;
  }

  ellipse {
    transform-origin: center center;
  }
`;
