import React from 'react';
import './Loading.css';

const Loading = ({ fullScreen = false, size = 'medium', color = 'primary' }) => {
  const containerClass = fullScreen ? 'loading-container fullscreen' : 'loading-container';
  const spinnerClass = `loading-spinner ${size} ${color}`;

  return (
    <div className={containerClass}>
      <div className={spinnerClass}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading; 