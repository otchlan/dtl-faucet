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
        <div className="main-div" style={{ maxWidth: "70%", margin: "0 auto" }}>
          <MarginDiv>
            <p style={{ color: "grey", fontWeight: "bold" }}>
              Zapraszamy do dołączenia się do naszej organizacji!
            </p>
            <p style={{ color: "white" }}>
            Jesteśmy dynamiczną społecznością, która skupia się na prowadzeniu badań naukowych, tworzeniu innowacyjnych rozwiązań technicznych oraz organizacji różnorodnych projektów. Naszym celem jest rozwijanie współpracy między firmami, różnego rodzaju organizacjami, jednostkami publicznymi, naukowymi oraz osobami zainteresowanymi dziedziną, aby wspólnie dokonać postępu i wprowadzić pozytywne zmiany.            </p>
            <br />
            <br />
            <p style={{ color: "white", fontWeight: "bold" }}>
              Dlaczego warto dołączyć do naszej organizacji?
            </p>
            <br />
            <ul>
              <li>
                <span style={{ color: "grey" }}>
                  1. Możliwość angażowania się w badania naukowe:
                </span>
                <p style={{ color: "white" }}>
                  Jeśli interesuje Cię rozwój technologiczny i chciałbyś/chciałabyś mieć udział w prawdziwych badaniach naukowych, to jesteśmy odpowiednim miejscem dla Ciebie. Tworzymy interdyscyplinarne zespoły, które skupiają się na różnych obszarach, takich jak sztuczna inteligencja, kryptografia, analizy i wiele innych.
                </p>
              </li>
              <li>
              <br />
                <span style={{ color: "grey" }}>
                  2. Tworzenie innowacyjnych rozwiązań technicznych i społecznych:
                </span>
                <p style={{ color: "white" }}>
                  Wspólnie pracujemy nad projektami, które mają na celu stworzenie nowych rozwiązań technologicznych i praktyk. Jeśli masz pomysł na produkt, badanie, mechanizmy społeczne lub chcesz rozwijać swoje umiejętności w projektowaniu, programowaniu i filozofii, to jesteśmy otwarci na Twoje propozycje i gotowi Cię wesprzeć.
                </p>
              </li>
              <li>
              <br />
                <span style={{ color: "grey" }}>
                   3. Współpraca z biznesem, edukacją i rządem:
                </span>
                <p style={{ color: "white" }}>
                  Działamy jako most pomiędzy światem nauki, a biznesem. Współpracujemy z firmami, organizacjami rządowymi i pozarządowymi, aby dostosować nasze badania i rozwiązania do ich potrzeb. Jeśli jesteś przedstawicielem wszelkiego typu organizacji, to zapraszamy do współpracy i dialogu na temat potencjalnych projektów lub wspólnych inicjatyw.
                </p>
              </li>
              <li>
              <br />
                <span style={{ color: "grey" }}>
                  4. Wsparcie i rozwój:
                </span>
                <p style={{ color: "white" }}>
                Jesteśmy otwarci na nowe pomysły i angażujemy się w rozwój naszych członków. Oferujemy możliwość nauki od doświadczonych specjalistów, udziału w warsztatach i szkoleniach, dostęp do sieci kontaktów z branży, a także możliwość pracy w startupach, firmach i instytucjach nie tylko w Polsce, ale też na świecie. Wspólnie budujemy atmosferę sprzyjającą kreatywności i wymianie wiedzy, ale wymagamy zaangażowania i poczucia odpowiedzialności.                </p>
              </li>
            </ul>
            <br />
            <p style={{ color: "white" }}>
              Dołącz do naszej organizacji i bądź częścią naszego dynamicznego zespołu, który dąży do rozwoju oraz tworzenia pozytywnych zmian. Niezależnie od Twoich umiejętności i doświadczenia, każdy jest mile widziany i może wnieść cenne spojrzenie na temat technologii i rozwoju społeczności.
            </p>
            <br />
            <br />
            <p style={{ color: "grey" }}>
              Skontaktuj się z nami już dziś i dołącz do naszej organizacji!
            </p>
            <br />
            <p style={{ color: "white", fontWeight: "bold" }}>
              centrumsi(@)deeptechlabs.pl
            </p>
          </MarginDiv>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
