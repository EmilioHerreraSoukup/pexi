import React from 'react';
import styled from '@emotion/styled';
import gitHubLogo from './imgs/gitHubLogo.png';
import linkedInLogo from './imgs/linkedinLogo.png';
import { Blocky } from './Blocky';
import { ProgressBar } from './ProgressBar';

export const Sidebar = ({ color, remainingPairs }) => {
  return (
    <Wrapper color={color}>
      <Logo>
        <h1>PEXY</h1>
      </Logo>
      <Middle>
        <Blocky color={color} />

        <p>Progress:</p>
        <ProgressBar remainingPairs={remainingPairs} color={color} />
      </Middle>

      <Footer>
        <LogoHolder>
          <a
            href="https://github.com/EmilioHerreraSoukup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubLogo} alt="Git Hub Logo" />
          </a>

          <a
            href="https://github.com/EmilioHerreraSoukup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="LinkedIn Logo" />
          </a>
          <p>Emilio Herrera Soukup</p>
        </LogoHolder>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px 50px;
  width: 100%;
  box-sizing: border-box;
  border-left: 4px solid #4e4b5c;
  position: relative;
  display: grid;
  grid-template-columns: 1fr, 1fr, 1fr;
  align-items: center;
`;

const Logo = styled.div`
  margin-top: 25px;
  text-align: center;

  h1 {
    letter-spacing: 5px;
    font-size: 62px;
    margin: 0;
    color: #4e4b5c;
  }
`;

const Middle = styled.div`
  width: 100%;

  p {
    color: #4e4b5c;
  }
`;

const Footer = styled.div`
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
    color: #4e4b5c;
  }
`;

const LogoHolder = styled.div`
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
