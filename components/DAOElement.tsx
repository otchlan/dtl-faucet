import React, { useEffect, useState } from 'react';
import styles from '@/components/DAOElement.module.css';

interface DAOElementProps {
  link: string; // Social media link
}

interface SocialMediaMetadata {
  title: string | null;
  thumbnail: string | null;
}

const DAOElement: React.FC<DAOElementProps> = ({ link }) => {
  const [metadata, setMetadata] = useState<SocialMediaMetadata>({ title: null, thumbnail: null });

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await fetch(`/api/fetchMetadata?url=${encodeURIComponent(link)}`);
        const data = await response.json();
        setMetadata({ title: data.title, thumbnail: data.thumbnail });
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchMetadata();
  }, [link]);

  return (
    <div className={styles.container}>
      {metadata.thumbnail && (
        <img
          src={metadata.thumbnail}
          alt="Thumbnail"
          className={styles.image}
        />
      )}
      {metadata.title && <a href={link} className={styles.glowText_x}>{metadata.title}</a>}
    </div>
  );
};

export default DAOElement;
