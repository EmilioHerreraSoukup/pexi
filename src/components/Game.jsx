import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Card } from './card/Card';
import { Sidebar } from './sidebar/Sidebar';
import { WinScreen } from './WinScreen';

import { shuffle } from '../utils/utils';

const createCards = (num) => {
  const array = [];

  for (let index = 0; index < num; index += 1) {
    const card = {
      value: Math.floor((index % num) / 2).toString(),
      flipped: false,
      discarted: false,
      canFlip: true
    };

    array.push(card);
  }
  return shuffle(array);
};

export const Game = () => {
  const [cards, setCards] = useState(createCards(16));
  const [gameStatus, setGameStatus] = useState({
    remainingCards: 16,
    firstCard: null,
    secondCard: null,
    turnNumber: 0,
    turnType: null
  });

  const { firstCard, secondCard, remainingCards } = gameStatus;

  const flipCard = (index) => {
    const updatedCards = [...cards];
    updatedCards[index] = { ...cards[index], flipped: true, canFlip: false };
    setCards(updatedCards);
  };

  const resetCards = () => {
    const updatedCards = [...cards];
    updatedCards[firstCard.index] = { ...cards[firstCard.index], flipped: false, canFlip: true };
    updatedCards[secondCard.index] = { ...cards[secondCard.index], flipped: false, canFlip: true };
    setCards(updatedCards);

    setGameStatus({
      ...gameStatus,
      firstCard: null,
      secondCard: null,
      turnNumber: gameStatus.turnNumber + 1,
      turnType: 'reset'
    });
  };

  const discardCards = () => {
    const updatedCards = [...cards];
    updatedCards[firstCard.index] = { ...cards[firstCard.index], discarted: true };
    updatedCards[secondCard.index] = { ...cards[secondCard.index], discarted: true };
    setCards(updatedCards);

    setGameStatus({
      ...gameStatus,
      firstCard: null,
      secondCard: null,
      remainingCards: remainingCards - 2,
      turnType: 'win'
    });
  };

  const checkGameStatus = () => {
    if (remainingCards === 0) {
      // gameWon();
    }
    if (firstCard && secondCard) {
      if (firstCard.value === secondCard.value) {
        discardCards();
      } else {
        setTimeout(() => {
          resetCards();
        }, 1000);
      }
    }
  };

  const handleCardClick = (index) => {
    if (!cards[index].canFlip) {
      return;
    }
    if (!firstCard && !secondCard) {
      flipCard(index);

      setGameStatus({
        ...gameStatus,
        firstCard: { value: cards[index].value, index }
      });
    }

    if (firstCard && !secondCard) {
      flipCard(index);
      setGameStatus({
        ...gameStatus,
        secondCard: { value: cards[index].value, index }
      });
    }
    if (firstCard && secondCard) {
      resetCards();
    }
  };

  useEffect(() => {
    checkGameStatus();
  }, [firstCard, secondCard]);

  return (
    <Wrapper>
      {remainingCards <= 0 && <WinScreen />}
      {remainingCards > 0 && (
        <Board>
          {cards.map((card, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card card={card} key={i} index={i} onClick={handleCardClick} />
          ))}
        </Board>
      )}

      <Sidebar remainingPairs={remainingCards / 2} turnType={gameStatus.turnType} />
    </Wrapper>
  );
};

const Board = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  column-gap: 24px;
  row-gap: 24px;
  box-sizing: border-box;
  height: 100vh;
  padding: 50px;
  background: #f3f5f2;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 2fr 2fr 2fr;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  width: 100%;
  height: 100vh;
`;
