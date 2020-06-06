import React from 'react';
import PropTypes from 'prop-types';
import gitHubLogo from '../../imgs/gitHubLogo.png';
import linkedInLogo from '../../imgs/linkedinLogo.png';
import { Blocky } from '../Blocky';
import { ProgressBar } from '../ProgressBar';
import { Wrapper, Middle, LogoHolder, Footer, Logo } from './Sidebar.styles';

export const Sidebar = ({ remainingPairs, turnType }) => {
  return (
    <Wrapper>
      <Logo>
        <h1>PEXY</h1>
      </Logo>
      <Middle>
        <Blocky remainingPairs={remainingPairs} turnType={turnType} />
        <ProgressBar remainingPairs={remainingPairs} />
      </Middle>

      <Footer>
        <LogoHolder>
          <a
            href="https://github.com/EmilioHerreraSoukup/pexi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubLogo} alt="Git Hub Logo" />
          </a>

          <a
            href="https://www.linkedin.com/in/emilio-herrera-soukup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} alt="LinkedIn Logo" />
          </a>
        </LogoHolder>

        <p>Emilio Herrera Soukup</p>
      </Footer>
    </Wrapper>
  );
};

Sidebar.propTypes = {
  remainingPairs: PropTypes.number.isRequired,
  turnType: PropTypes.string.isRequired
};
