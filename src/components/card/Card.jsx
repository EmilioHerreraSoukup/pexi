import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { Box, CardFace, Back } from './Card.styles';

export const Card = ({ card: { value, discarted, flipped, emoji }, onClick, index }) => {
  const theme = useTheme();

  return (
    <Box flipped={flipped} onClick={() => onClick(index)} data-testid="card">
      <CardFace>?</CardFace>
      {/* <CardFace discarted={discarted}>{emoji}</CardFace> */}
      <Back color={theme.color} discarted={discarted} data-testid={`backCard--${value}`}>
        {emoji}
      </Back>
    </Box>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    flipped: PropTypes.bool,
    value: PropTypes.string,
    discarted: PropTypes.bool,
    emoji: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
