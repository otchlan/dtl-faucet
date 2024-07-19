import React from "react";

interface MarginDivProps {
  children: React.ReactNode;
}

const MarginDiv: React.FC<MarginDivProps> = ({ children }) => {
  return (
    <div className="text-center text-gray-500 md:text-xl" style={{ marginTop: "64px", width: "100%", borderRadius: "8px", border: "5px solid #08fc9c", padding: "16px" }}>
      {children}
    </div>
  );
};

export default MarginDiv;
