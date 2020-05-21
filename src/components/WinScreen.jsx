import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';

export const WinScreen = ({ onReset }) => {
  const theme = useTheme();

  return (
    <Wrapper color={theme.color}>
      <h2>You Won!</h2>

      {/* <Blocky /> */}

      <Button onClick={() => onReset()} color={theme.color}>
        Go Again!
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #f3f5f2;
  text-align: center;

  h2 {
    font-size: 72px;
    color: ${({ color }) => `${color}`};
    width: 100%;
    margin: 0;
  }
`;

const Button = styled.button`
  padding: 24px;
  border-radius: 15px;
  background-color: ${({ color }) => `${color}`};
  cursor: pointer;
  border: none;
  font-size: 20px;
`;
