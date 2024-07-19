import React from 'react';
import Link from 'next/link';

const RedirectButton: React.FC = () => {
  return (
    <div style={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      marginTop: "80px",
    }}>
      <Link href="/launchpad">
        <button style={{ 
          color: '#05ff9a',
          borderColor: '#05ff9a',
          height: "90px", 
          borderWidth: '1px', 
          borderStyle: 'solid', 
          padding: '10px 20px', 
          cursor: 'pointer',
          borderRadius: '8px',
          backgroundColor: 'transparent',
          transition: 'background-color 0.3s ease, color 0.3s ease'  // For smooth transitions
        }}
        onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#05ff9a';
            e.currentTarget.style.color = '#000';
        }}
        onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#05ff9a';
        }}>
          Zobacz dostępne projekty inwestycyjne
        </button>
      </Link>
    </div>
  );
};

export default RedirectButton;
