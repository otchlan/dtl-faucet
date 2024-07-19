import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="max-w-sm"> 
      <div className="mb-3 h-60 text-center bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${image})`}}></div>
      <a href="#">
        <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-100 dark:text-white">
          {title}
        </h5>
      </a>
      <div className="mb-3 text-center font-normal text-gray-500 dark:text-gray-400">
        {description}
      </div>
      <style jsx>{`



      `}</style>
    </div>
  );
};

export default Card;
