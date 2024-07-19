import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import TopSection from "@/components/Top2div";
import MarginDiv from "@/components/Vert1Div";

export default function Home() {
  return (
    <>
      <TopSection
        leftContent={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
            <img
              src="/ls_logo.png"
              alt="Image Description"
              style={{
                padding: "10%",
                maxWidth: "80%",
                maxHeight: "80%",
                objectFit: "contain",
              }}
            />
          </div>
        }
        rightContent={
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center" }}>
          Witaj w naszej Letniej Szkole Sztucznej Inteligencji, miejscu, gdzie pasja spotyka się z praktyką. Ta unikalna inicjatywa to nie tylko intensywne tygodnie nauki, ale również platforma dla innowacji, kreatywności i budowania relacji. Praca w zespołach nad prawdziwymi projektami pod okiem doświadczonych ekspertów, pozwoli Ci nie tylko zdobyć praktyczne umiejętności, ale też zrozumieć, jak wygląda praca w świecie sztucznej inteligencji. Dodatkowo, szereg zaplanowanych wyjazdów i aktywności integracyjnych pozwoli Ci nawiązać cenne relacje, które mogą okazać się kluczowe w przyszłej karierze. I pamiętaj, nasza szkoła jest otwarta dla każdego, niezależnie od doświadczenia technicznego. Sztuczna inteligencja to coś więcej niż matematyka i programowanie - to przede wszystkim sposób myślenia, który chcemy Ci pomóc rozwinąć. Dołącz do nas już dziś, ilość miejsc jest ograniczona udział w szkole jest bezpłatny!
          </div>
        }
      />



      <Footer />
    </>
  );
}



