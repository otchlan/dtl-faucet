import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import TopSection from "@/components/Top2div";
import MarginDiv from "@/components/Vert1Div";

export default function Home() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="py-8 md-64 main-div" style={{ maxWidth: "94%", margin: "0 auto" }}>
          <TopSection
            leftContent={
              <div>
                Polskie korpusy danych dla Dużych Modeli Językowych
              </div>
            }
            rightContent={
              <div>
                Daj nam chwilę pracujemy nad treścią
              </div>
            }
          />

          <MarginDiv>
            :)
          </MarginDiv>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
