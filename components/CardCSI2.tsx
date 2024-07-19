import React from "react";
import Link from "next/link";

const CardCSI = () => {
  return (
    <div className="card-container">
      <div className="card">
        <Link href="/b_aa">
          <button className="card-button">Prace badawcze - Axiomatic Alignment</button>
        </Link>
      </div>
      <div className="card">
        <Link href="/b_corpus">
          <button className="card-button">Wysokiej jakości korpus polskich danych dla LLM-ów </button>
        </Link>
      </div>
      <div className="card">
        <Link href="/b_openProject">
          <button className="card-button">Tu może być Twój projekt</button>
        </Link>
      </div>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          width: 96%;
          margin: 0 auto;
        }
        .card {
          flex: 1;
          height: 200px;
          border-radius: 8px;
          border: 5px solid #08fc9c;
          background-color: #212121;
          margin: 2%;
          width: 30%;
          min-width: 200px;
          padding: 2%;
        }
        .card-button {
          width: 100%;
          height: 100%;
          border: none;
          background-color: transparent;
          color: #08fc9c;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .button-image {
          width: 180px;
          height: 180px;
          transition: transform 0.5s;
        }
        .button-image:hover {
          transform: rotate(360deg);
        }
      `}</style>
    </div>
  );
};

export default CardCSI;
