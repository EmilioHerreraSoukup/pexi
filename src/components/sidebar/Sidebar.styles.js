import styled from '@emotion/styled';
import { colors, device } from '../../utils/constants';

export const Wrapper = styled.div`
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: grid;
  align-items: center;
  border-top: 4px solid ${colors.gray};
  grid-template-rows: 1fr 1fr 1fr;

  @media ${device.laptop} {
    border-left: 4px solid ${colors.gray};
    border-top: none;
    padding: 24px 12%;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const Logo = styled.div`
  margin-top: 0;
  text-align: center;

  @media ${device.laptop} {
    margin-top: 25px;
  }

  h1 {
    letter-spacing: 5px;
    font-size: 32px;
    margin: 0;
    color: ${colors.gray};

    @media ${device.laptop} {
      font-size: 62px;
    }
  }
`;

export const Middle = styled.div`
  width: 100%;
  height: 100%;
  max-width: 320px;
  margin: 0 auto;

  @media ${device.laptop} {
    margin-top: 250px;
  }

  p {
    color: ${colors.gray};
    margin-top: 70px;

    @media ${device.laptop} {
      margin-top: 250px;
    }
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
  flex-wrap: nowrap;

  p {
    margin: 0;
    width: auto;
  }

  a {
    width: auto;
    text-align: center;
  }

  img {
    width: 25px;
    opacity: 0.5;
    transition: opacity 300ms ease;
    margin: 0 12px;

    &:hover {
      opacity: 0.8;
    }

    @media ${device.laptop} {
      width: 32px;
    }
  }
`;
