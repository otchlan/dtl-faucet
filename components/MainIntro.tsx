// Assuming this is saved as `MainVideoComponent.tsx`

import React from 'react';
import YouTubeVideo from './YouTubeVideo'; // Adjust the path as needed
import styles from './MainIntro.module.css';


const MainIntro: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <YouTubeVideo />
    </div>
  );
};

export default MainIntro;
