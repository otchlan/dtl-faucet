import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import AboutUs from "@/components/about-us";
import OneDivNoBorder from "@/components/OneDivNoBorder";

export default function Home() {
  return (
    <>

      <OneDivNoBorder content="Wierzymy, że sukces firmy opiera się na jej pracownikach. Dlatego promujemy koncepcję ustawicznego uczenia się i rozwoju przez całe życie. Jako deeptechlabs pomagamy pracownikom rozwijać się w zakresie najnowszych technologii, z naciskiem na innowacje, które już niedługo staną się codziennością w świecie biznesu." />
      <OneDivNoBorder content="Jako laboratorium technologiczne jesteśmy dumni z naszego wkładu w kształtowanie przyszłości Polski w erze cyfrowej. Naszym celem jest uczynienie Polski liderem w dziedzinie technologii dysruptywnych, które zmienią sposób, w jaki żyjemy i pracujemy. Pracując ramię w ramię z polskimi firmami i specjalistami, dążymy do stworzenia innowacyjnego ekosystemu, który uczyni nasz kraj pionierem w dziedzinie nowych technologii." />
      
      <AboutUs />

       
     
      <Footer />
    </>
  );
}

