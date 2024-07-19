import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

interface TopSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  middleContent: React.ReactNode;
}

const TopSection: React.FC<TopSectionProps> = ({ leftContent, rightContent, middleContent }) => {
  return (
    <div style={{ display: "flex", width: "96%", justifyContent: "center", margin: "16px auto 0" }}>
      <div style={{ width: "32%", marginRight: "2%", border: "5px solid #08fc9c", backgroundColor: "black", padding: "16px", borderRadius: "8px" }}>
        <div className="text-center text-gray-500 md:text-xl">
          {leftContent}
        </div>
      </div>
      <div className="text-center text-gray-500 md:text-xl" style={{ width: "32%", marginRight: "2%", border: "5px solid #08fc9c", backgroundColor: "black", padding: "16px", borderRadius: "8px" }}>
        {middleContent}
      </div>
      <div className="text-center text-gray-500 md:text-xl" style={{ width: "32%", border: "5px solid #08fc9c", backgroundColor: "black", padding: "16px", borderRadius: "8px" }}>
        {rightContent}
      </div>
    </div>
  );
};

export default TopSection;
