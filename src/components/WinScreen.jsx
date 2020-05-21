import React from 'react';
import styled from '@emotion/styled';

export const WinScreen = ({ color }) => {
  return (
    <Wrapper color={color}>
      <h2>You Won!</h2>

      {/* <Blocky /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f5f2;

  h2 {
    font-size: 72px;
    color: ${({ color }) => `#${color}`};
  }
`;
