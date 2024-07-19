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
                Axiomatic Alignment
              </div>
            }
            rightContent={
              <div>
                Daj nam chwilę pracujemy nad treścią
              </div>
            }
          />

          <MarginDiv>
            <a href="https://www.gatoframework.org/gato-literature/axiomatic-alignment" target="_blank" rel="noopener noreferrer">
              https://www.gatoframework.org/gato-literature/axiomatic-alignment
            </a>
            <br />
            <br />
            <a href="https://www.youtube.com/watch?v=7WwqV0cBoGA" target="_blank" rel="noopener noreferrer">
              https://www.youtube.com/watch?v=7WwqV0cBoGA
            </a>
          </MarginDiv>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
