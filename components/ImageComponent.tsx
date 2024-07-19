import React from 'react';
import { useRouter } from 'next/router';

interface MediaComponentProps {
  src: string;  // Path to either .mp4 or .png
  alt?: string;  // Alternative text for media (used for accessibility)
}

const MediaComponent: React.FC<MediaComponentProps> = ({ src, alt }) => {
  const router = useRouter();
  const isVideo = src.endsWith('.mp4');
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
      {isVideo ? (
        <video
          width="64%" 
          height="64%"
          autoPlay 
          muted 
          loop 
          onClick={() => router.push('/oferta')}
          style={{
            cursor: 'pointer',
            boxShadow: '-0px 0px 20px 0px #05ff9a',
            borderRadius: '1%',
            marginBottom: "24px"
          }}
        >
          <source src={src} type="video/mp4" />
          {alt && <track kind="descriptions" label={alt} />}
        </video>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          width="64%" 
          height="64%"
          onClick={() => router.push('/oferta')}
          style={{
            cursor: 'pointer',
            boxShadow: '-0px 0px 15px 0px #05ff9a',
            borderRadius: '1%',
            marginBottom: "24px"
          }}
        />
      )}
    </div>
  );
}

export default MediaComponent;
