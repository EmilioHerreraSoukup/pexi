import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import { colors } from '../utils/constants';

export const WinScreen = ({ onReset }) => {
  const theme = useTheme();

  return (
    <Wrapper color={theme.color}>
      <h2>You Won!</h2>

      <Button onClick={() => onReset()} color={theme.color}>
        Go Again!
      </Button>
    </Wrapper>
  );
};

WinScreen.propTypes = {
  onReset: PropTypes.func.isRequired
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #f3f5f2;
  text-align: center;
  font-size: 20px;

  h2 {
    font-size: 72px;
    color: ${({ color }) => `${color}`};
    width: 100%;
    margin: 0;
  }
`;

const Button = styled.button`
  padding: 1em 2em;
  border-radius: 3px;
  background-color: transparent;
  cursor: pointer;
  font-size: 0.625em;
  border: ${({ color }) => `2px solid ${color}`};
  transition: 300ms ease background-color;
  color: ${colors.gray};
  text-transform: uppercase;
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ color }) => `${color}`};
  }
`;
