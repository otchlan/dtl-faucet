import React, { useState } from 'react';
import CardRev from '@/components/CardRevNoLink';
import GenericPopup from '@/components/GenericPopup'; // Ensure this import points to the correct location

// Define an interface for the component props
interface CardWithPopupProps {
  name: string;
  imageUrl: string;
  description: string;
}

const CardWithPopup: React.FC<CardWithPopupProps> = ({ name, imageUrl, description }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <div onClick={togglePopup}>
        <CardRev
          name={name}
          imageUrl={imageUrl}
          description={description}
        />
      </div>

      {isPopupVisible && (
        <GenericPopup onClose={togglePopup} isOpen={isPopupVisible}>
          <h2>{name}</h2>
          <p>{description}</p>
          {/* Additional content can be included here if necessary */}
        </GenericPopup>
      )}
    </>
  );
};

export default CardWithPopup;
