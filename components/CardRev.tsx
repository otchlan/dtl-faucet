import React from "react";
import Link from "next/link"; 
import styles from "./CardRev.module.css"; 

type CardProps = {
  name: string;
  imageUrl: string;
  href: string;
  description: React.ReactNode;
};

const CardRev: React.FC<CardProps> = ({ name, imageUrl, href, description }) => {
  return (
    <div className={styles.card}>
    <Link href={href}>
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
      </Link>
    </div>
  );
};

export default CardRev;
