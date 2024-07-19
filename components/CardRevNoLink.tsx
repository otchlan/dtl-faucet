import React from "react";
import styles from "./CardRev.module.css"; 

type CardProps = {
  name: string;
  imageUrl: string;
  description: React.ReactNode;
};

const CardRev: React.FC<CardProps> = ({ name, imageUrl, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage }>
        <img className={styles.image} src={imageUrl} alt={name} />
      </div>
      <div className={styles.cardDescription}>
        <p>{description}</p>
      </div>
        <button className={styles.cardButton}>
        <div className={`${styles.cardName} backdrop-blur-xl`}>
          <p>{name}</p>
        </div>
        </button>
    </div>
  );
};

export default CardRev;
