import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Timer = ({ remainingPairs }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const startTime = Date.now() - time;

    const interval = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 1000);

    if (remainingPairs < 1) {
      clearInterval(interval);
      setTime(0);
    }

    return () => clearInterval(interval);
  }, [remainingPairs, time]);

  const renderTime = () => {
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2);
    const minutes = `0${Math.floor(time / 60000) % 60}`.slice(-2);
    const hours = `0${Math.floor(time / 3600000)}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <p>
      <strong>Time: </strong>
      {renderTime()}
    </p>
  );
};

Timer.propTypes = {
  remainingPairs: PropTypes.number.isRequired
};
