import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { Timer } from './Timer';
import { colors, device } from '../utils/constants';

export const ProgressBar = ({ remainingPairs }) => {
  const theme = useTheme();
  const getPercentage = () => {
    const remainingPercetange = (remainingPairs * 2 * 100) / 16;

    return 100 - remainingPercetange;
  };

  return (
    <Holder>
      <Bar>
        <Fill percentage={getPercentage()} color={theme.color} />
      </Bar>
      <Timer remainingPairs={remainingPairs} />
    </Holder>
  );
};

ProgressBar.propTypes = {
  remainingPairs: PropTypes.number.isRequired
};

const Holder = styled.div`
  position: absolute;
  bottom: -10px;
  width: 100%;
  bottom: -62px;

  @media ${device.tablet} {
    bottom: -50px;
  }

  p {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.gray};
    font-variant-numeric: tabular-nums;
    font-family: monospace;
  }
`;

const Bar = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid ${colors.gray};
  height: 7px;
  position: relative;

  @media ${device.tablet} {
    bottom: 0;
    border: 3px solid ${colors.gray};
    height: 10px;
  }
`;

const Fill = styled.div`
  height: 10px;
  border-radius: 16px;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${({ color }) => color};
  position: absolute;
  left: 0;
  top: 0;
`;
