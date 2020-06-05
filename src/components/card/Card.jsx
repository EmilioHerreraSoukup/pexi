import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { Box, CardFace, Back } from './Card.styles';

export const Card = ({ card: { value, discarted, flipped }, onClick, index }) => {
  const theme = useTheme();

  return (
    <Box
      flipped={flipped}
      discarted={discarted}
      onClick={() => onClick(index)}
      data-testid="card"
      data-value={value}
    >
      <CardFace>?</CardFace>
      <Back color={theme.color}>{value}</Back>
    </Box>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    flipped: PropTypes.bool,
    value: PropTypes.string,
    discarted: PropTypes.bool
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
