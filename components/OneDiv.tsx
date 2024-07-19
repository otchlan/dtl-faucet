import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

interface SectionProps {
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ content }) => {
  return (
      <div style={{ width: "96%", marginRight: "2%", border: "5px solid #08fc9c", backgroundColor: "black", padding: "16px", borderRadius: "8px", justifyContent: "center", margin: "16px auto 0", display: "flex" }}>
        <div className="text-center text-gray-500 md:text-xl">
          {content}
        </div>
      </div>
  );
};

export default Section;
