import React from 'react';
import ReactGA from 'react-ga';
import dotenv from 'dotenv';
import { ThemeProvider } from 'emotion-theming';
import { Game } from './components/Game';
import './App.css';
import { getRandomColor } from './utils/utils';

dotenv.config();

ReactGA.initialize(process.env.GA_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  const theme = {
    color: getRandomColor()
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Game />
      </ThemeProvider>
    </div>
  );
}

export default App;
