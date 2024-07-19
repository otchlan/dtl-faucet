import React from "react";

const OscillatingLine = () => {
  return (
    <div className="oscillating-line">
      <div className="line"></div>
     
      <style jsx>{`
        .oscillating-line {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .line {
          width: 100%;
          height: 5px;
          background: linear-gradient(
            to right,
            white,
            #08fc9c
          );
          margin-top: 64px;
          border-radius: 2.5px;
        }
      `}</style>
    </div>
  );
};

export default OscillatingLine;
