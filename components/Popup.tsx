// Popup.tsx
import React, { ReactNode, useState } from 'react';
import styles from './Popup.module.css';
import WalletStatus from './WalletStatus';
import FaucetComponent from './FaucetComponent';

interface PopupProps {
  onClose: () => void;
  children?: ReactNode;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);


  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={e => e.stopPropagation()}>
        <div className={styles.closeContainer}>
          <button className={styles.closeButton} onClick={onClose}>✖️</button>
        </div>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <FaucetComponent isWalletConnected={isWalletConnected} />
          </div>
          <div className={styles.rightContent}>
            <WalletStatus setIsWalletConnected={setIsWalletConnected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
