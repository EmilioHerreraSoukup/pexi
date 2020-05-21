import styled from '@emotion/styled';
import { colors } from '../../utils/constants';

export const Wrapper = styled.div`
  padding: 24px 12%;
  width: 100%;
  box-sizing: border-box;
  border-left: 4px solid ${colors.gray};
  position: relative;
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  align-items: center;
`;

export const Logo = styled.div`
  margin-top: 25px;
  text-align: center;

  h1 {
    letter-spacing: 5px;
    font-size: 62px;
    margin: 0;
    color: ${colors.gray};
  }
`;

export const Middle = styled.div`
  width: 100%;

  p {
    color: ${colors.gray};
  }
`;

export const Footer = styled.div`
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  align-self: end;

  p {
    font-size: 14px;
    width: 100%;
    text-align: center;
    color: ${colors.gray};
  }
`;

export const LogoHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  p {
    margin: 0;
  }

  img {
    width: 32px;
    opacity: 0.5;
    transition: opacity 300ms ease;
    margin: 0 12px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
