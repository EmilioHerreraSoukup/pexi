import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Game } from './components/Game';
import './App.css';
import { getRandomColor } from './utils/utils';

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
