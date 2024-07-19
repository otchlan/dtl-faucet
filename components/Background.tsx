import React from 'react';

const Background = () => {
  return (
    <div
      style={{
        background: '#777',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        opacity: 0.8, // Set the opacity to make it less visible
      }}
    >
      {/* Add any additional content or elements for the background */}
    </div>
  );
};


export default Background;

