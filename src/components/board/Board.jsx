import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Card } from '../card/Card';
import { device } from '../../utils/constants';

export const Board = ({ handleCardClick, cards }) => {
  return (
    <Wrapper>
      {cards.map((card, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Card card={card} key={i} index={i} onClick={handleCardClick} />
      ))}
    </Wrapper>
  );
};

Board.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  column-gap: 12px;
  row-gap: 12px;
  padding: 12px;
  box-sizing: border-box;
  background: #f3f5f2;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 2fr 2fr 2fr;

  @media ${device.mobileL} {
    padding: 12px 10%;
  }

  @media ${device.laptop} {
    column-gap: 24px;
    row-gap: 24px;
    padding: 50px 10%;
  }

  @media ${device.laptopL} {
    padding: 50px 20%;
  }
`;
