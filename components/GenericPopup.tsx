// GenericPopup.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import styles from './GenericPopup.module.css'; // Ensure to create or adjust this CSS module

interface GenericPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const GenericPopup: React.FC<GenericPopupProps> = ({ children, isOpen, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Detect click outside the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    // Only attach the listener if the popup is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle the ESC key to close the popup
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup} ref={popupRef}>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default GenericPopup;
