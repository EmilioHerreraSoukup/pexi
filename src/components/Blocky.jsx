import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { colors, device } from '../utils/constants';

export const Blocky = ({ turnType }) => {
  const theme = useTheme();

  const [mood, setMood] = useState('not-happy');

  useEffect(() => {
    if (turnType === 'win') {
      setMood('happy');
    } else {
      setMood('not-happy');
    }
  }, [turnType]);

  return (
    <Wrapper>
      <Character>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 127.433 132.743"
          xmlSpace="preserve"
          preserveAspectRatio="meet"
        >
          <rect
            width="127.433"
            height="132.743"
            stroke={colors.gray}
            fill={theme.color}
            strokeWidth="8px"
          />

          <circle cx="86.238" cy="57.885" r="6.667" fill={colors.gray} />
          <circle cx="40.072" cy="57.885" r="6.667" fill={colors.gray} />
          {mood === 'happy' && (
            <path
              fill={colors.gray}
              d="M71.916 62.782a2.004 2.004 0 00-3.584-1.324c-.758.766-2.483 2.235-4.696 2.358-1.696.094-3.438-.625-5.191-2.137a.106.106 0 00-.011-.009l.002.005a1.988 1.988 0 00-1.235-.509 2.002 2.002 0 00-1.208 3.666l-.003-.001c2.221 1.871 4.536 2.88 6.912 2.986.333.014.67.012 1.007-.01 3.163-.191 5.572-1.942 6.888-3.166l.452-.453c.021-.019.04-.041.06-.061l.034-.034-.021.02c.344-.342.57-.806.594-1.331z"
            />
          )}
          {mood !== 'happy' && <circle cx="67.072" cy="65.885" r="3.667" fill={colors.gray} />}
        </svg>
      </Character>

      <Shadow>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="meet"
          width="100%"
          height="100%"
          x="61"
          y="20"
          version="1.1"
          viewBox="0 0 122.436 39.744"
          xmlSpace="preserve"
        >
          <ellipse
            cx="61.128"
            cy="19.872"
            fill={colors.gray}
            fillOpacity={0.5}
            rx="49.25"
            ry="8.916"
          />
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
  width: 50px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media ${device.laptop} {
    width: 130px;
  }
`;

const Character = styled.div`
  animation: ${float} 3s ease-out infinite;
  width: 100%;
`;

const Shadow = styled.div`
  width: 100%;
  margin-top: 15px;

  svg {
    animation: ${shrink} 3s ease-out infinite;
    transform-origin: center center;
  }

  ellipse {
    transform-origin: center center;
  }
`;
