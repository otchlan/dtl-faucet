import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import Rekrutacja from "@/components/Recruitment"

export default function Home() {
  return (
    <>
      <Rekrutacja />
      <Footer />
    </>
  );
}



