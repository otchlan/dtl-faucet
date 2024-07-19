import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";

interface SectionProps {
  content: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ content }) => {
  return (
      <div style={{ width: "80vw", marginRight: "2%", backgroundColor: "black", padding: "16px", borderRadius: "8px", justifyContent: "center", margin: "16px auto 0", display: "flex" }}>
        <div className="text-center text-white md:text-xl">
          {content}
        </div>
      </div>
  );
};

export default Section;
