// StickyTopComponent.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './StickyTopComponent.module.css';
import MetaMaskConnection from '@/components/auth/MetamaskConnection';
import Popup from './Popup'; // Ensure this path is correct

const StickyTopComponent: React.FC = () => {
  const [showStickyTop, setShowStickyTop] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [buttonIcon, setButtonIcon] = useState('⬇️');
  const stickyTopRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = () => {
    setShowStickyTop(!showStickyTop);
    setButtonIcon(showStickyTop ? '⬇️' : '⛓');
  };

  const handleFaucetClick = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (stickyTopRef.current && !stickyTopRef.current.contains(event.target as Node)) {
        setShowStickyTop(false);
        setButtonIcon('⬇️');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={stickyTopRef} className={`${styles.stickyTop} ${showStickyTop ? styles.visible : styles.hidden}`}>
        <button className={`${styles.button} ${styles.faucetButton}`} onClick={handleFaucetClick}>🚰</button>
        {/* Other buttons */}
      </div>
      <div className={styles.buttonContainer} style={{ top: showStickyTop ? '50px' : '0px' }}>
        <button className={styles.newButton} onClick={handleButtonClick}>{buttonIcon}</button>
      </div>
      {showPopup && (
        <Popup onClose={() => setShowPopup(false)}>
          {/* Content to display inside the popup */}
          <p>This is the content inside the popup!</p>
        </Popup>
      )}
    </>
  );
};

export default StickyTopComponent;
