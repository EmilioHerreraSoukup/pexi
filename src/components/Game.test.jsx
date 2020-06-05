import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Game } from './Game';

test('Renders all Cards', () => {
  const { getAllByTestId } = render(<Game />);
  const cards = getAllByTestId('card');
  expect(cards).toHaveLength(16);
});

test('Card normal state', () => {
  const { getAllByTestId } = render(<Game />);
  const card = getAllByTestId('card')[0];
  expect(card).toHaveStyle(`transform: rotateY(0deg) translateY(0);`);
});

test('Card flipped state', () => {
  const { getAllByTestId } = render(<Game />);
  const card = getAllByTestId('card')[0];
  fireEvent.click(card);
  expect(card).toHaveStyle(`transform: rotateY(180deg) translateY(0);`);
});

test.only('Discards 2 matching cards', async () => {
  const { container } = render(<Game />);

  const card1 = container.querySelectorAll('[data-value="1"]')[0];
  const card2 = container.querySelectorAll('[data-value="1"]')[1];

  fireEvent.click(card1);
  fireEvent.click(card2);

  expect(card1).toHaveStyle(`opacity: 0;`);
  expect(card2).toHaveStyle(`opacity: 0;`);
});
