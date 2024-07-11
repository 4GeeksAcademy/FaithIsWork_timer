import React, { useState, useEffect } from 'react';
function SecondsCounter() {
  const [secondsLabel, setSecondsLabel] = useState('000000');
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
      setSecondsLabel(String(elapsedSeconds).padStart(6, '0'));
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <div className="timer"> {secondsLabel}</div>
  );
}
export default SecondsCounter;