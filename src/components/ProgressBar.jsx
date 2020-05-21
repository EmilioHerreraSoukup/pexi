import React from 'react';
import styled from '@emotion/styled';

export const ProgressBar = ({ remainingPairs, color }) => {
  const getPercentage = () => {
    const remainingPercetange = (remainingPairs * 2 * 100) / 16;

    return 100 - remainingPercetange;
  };

  return (
    <Bar>
      <Fill percentage={getPercentage()} color={color} />
    </Bar>
  );
};

const Bar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 16px;
  position: relative;
  border: 1px solid #4e4b5c;
`;

const Fill = styled.div`
  height: 10px;
  border-radius: 16px;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${({ color }) => `#${color}`};
  position: absolute;
  left: 0;
  top: 0;
`;
