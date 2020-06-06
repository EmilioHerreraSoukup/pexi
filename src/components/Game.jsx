import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Sidebar } from './sidebar/Sidebar';
import { Board } from './board/Board';
import { WinScreen } from './WinScreen';

import { shuffle, getEmoji } from '../utils/utils';
import { device } from '../utils/constants';

const createCards = (num) => {
  const cards = [];

  for (let index = 0; index < num; index += 1) {
    const value = Math.floor((index % num) / 2).toString();
    const card = {
      value,
      emoji: getEmoji(value),
      flipped: false,
      discarted: false,
      canFlip: true
    };

    cards.push(card);
  }
  return shuffle(cards);
};

export const Game = () => {
  const [cards, setCards] = useState(createCards(16));
  const [gameStatus, setGameStatus] = useState({
    remainingCards: 16,
    firstCard: null,
    secondCard: null,
    turnNumber: 0,
    turnType: 'win'
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
        setTimeout(() => {
          discardCards();
        }, 450);
      } else {
        setTimeout(() => {
          resetCards();
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    // Reset Cards
    setCards(createCards(16));

    // Reset Game Status
    setGameStatus({
      remainingCards: 16,
      firstCard: null,
      secondCard: null,
      turnNumber: 0,
      turnType: null
    });
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
      {remainingCards <= 0 && <WinScreen onReset={resetGame} />}
      {/* <WinScreen onReset={resetGame} /> */}
      {remainingCards > 0 && <Board handleCardClick={handleCardClick} cards={cards} />}

      <Sidebar remainingPairs={remainingCards / 2} turnType={gameStatus.turnType} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  grid-template-columns: 100%;
  grid-template-rows: 60% 40%;

  @media ${device.tablet} {
    grid-template-columns: 70% 30%;
    grid-template-rows: 100%;
  }

  @media ${device.laptop} {
    grid-template-columns: 70% 30%;
    grid-template-rows: 100%;
  }

  @media ${device.laptopL} {
    grid-template-columns: 80% 20%;
    grid-template-rows: 100%;
  }
`;
