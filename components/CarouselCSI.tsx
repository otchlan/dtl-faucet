// TODO - zdjęcia powinny lepiej wypełniać diva karuzeli 
// TODO -? karuzela powinna automatycznie przeskakiwać
// TODO -? boczne przyciski powinny pokazywać że możesz przelecieć w bok ale jak najedziesz powinny hoverować

import { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const displayedImages = [
    images[(startIndex - 1 + images.length) % images.length],
    images[startIndex],
    images[(startIndex + 1) % images.length],
  ];

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button onClick={handlePrev} disabled={images.length <= 1} className="carousel-button carousel-button-left">
          &lt;
        </button>
        <div className="carousel-images">
          {displayedImages.map((image, index) => (
            <div className="image-wrapper" key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={images.length <= 1} className="carousel-button carousel-button-right">
          &gt;
        </button>
      </div>

      <style jsx>{`
        .carousel {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 400px; /* Adjust the desired height here */
          margin-bottom: 1rem;
          background-color: #212121;
          width: 96%;
          margin-left: auto;
          margin-right: auto;
        }

        .carousel-container {
          display: flex;
          align-items: center;
          max-width: 400px;
        }

        .carousel-button {
          padding: 0.5rem;
          background: linear-gradient(to right, transparent, #bbb, #ccc, transparent);
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .carousel-button-left {
          margin-right: 0.5rem;
        }

        .carousel-button-right {
          margin-left: 0.5rem;
        }

        .carousel-images {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .image-wrapper img {
          width: 100%;
          height: 200px;
          padding: 5px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
