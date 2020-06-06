import styled from '@emotion/styled';
import { colors, device } from '../../utils/constants';

export const Box = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${({ discarted }) => `${discarted ? '0' : '1'}`};
  cursor: ${({ flipped }) => `${flipped ? 'auto' : 'pointer'}`};
  font-size: 50px;
  position: relative;
  transform: ${({ flipped }) =>
    `${flipped ? 'rotateY(180deg) translateY(0);' : 'rotateY(0deg) translateY(0);'}`};
  transition: transform 300ms ease, box-shadow 300ms ease, opacity 300ms ease;
  transform-style: preserve-3d;

  &:hover {
    transform: ${({ flipped }) => `${flipped ? '' : 'translateY(-4px)'}`};
  }
`;

export const CardFace = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 5px;
  background: white;
  color: ${colors.gray};
  user-select: none;
  font-size: 42px;

  @media ${device.tablet} {
    font-size: 65px;
  }
`;

export const Back = styled(CardFace)`
  transform: rotateY(180deg);
  background: ${({ color }) => color};
`;
