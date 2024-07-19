import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Card from "@/components/CardRev";
import CardBlank from "@/components/CardRevBlank";
import styles from './Home.module.css';
import Dropdown from '@/components/Dropdown';
import Test from '@/components/Test';
import Head from 'next/head';
import GoogleAnalytics from '@/components/GoogleAnalytics';


export default function Home() {
  return (
    <>
    <Head>
        <title>Launchpad</title>
        <link rel="icon" href="/faviconSmallSize.png" type="image/x-icon" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Deeptechlabs, technology driving your future" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Deeptechlabs" />
        <meta name="keywords" content="future, crypto, blockchain, technology, innovation, AI, artificial intelligence" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Title for Sharing" />
        <meta property="og:description" content="Deeptechlabs, technology driving your future" />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://www.deeptechlabs.pl" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deeptechlabs" />
        <meta name="twitter:description" content="Technology driving your future" />
        <meta name="twitter:image" content="/logo.svg" />
      </Head>
      <GoogleAnalytics />
    <div className={styles.container}>
      <Test />
     <Dropdown />
      <div className={styles['cards-container']}>
        <Card
          name="Budujemy technologię jutra" 
          imageUrl="/logo.svg" 
          href="/projects/dtl"
          description="Jesteśmy pionierami w dziedzinie technologii, łączymy zaawansowane badania i praktyczne potrzeby. Pracujemy na styku inżynierii, nauk ścisłych oraz społeczno-ekonomicznych, dążąc do tworzenia rozwiązań, które napędzają postęp i przynoszą korzyści ludzkości."
        />
        <Card
          name="Dopasowujemy SI dla każdego" 
          imageUrl="/randomAGI_4_t.png" 
          href="/projects/ragi"
          description="Specjalizujemy się w badaniach i rozwoju w dziedzinie sztucznej inteligencji, kreujemy przyszłość technologiczną dla przedsiębiorstw i konsumentów. Wykorzystując najświeższe technologie dostępne na rynku, tworzymy rozwiązania B2X."
        />
        <CardBlank
          name="Twój event w technologii Web3" 
          imageUrl="/napotege.png" 
          href="/projects/currency"
          description="NaPotęgę jest miejscem, gdzie profesjonaliści z branży spotykają się, aby dzielić się wiedzą, doświadczeniami i nawiązywać nowe kontakty. Ułatwiamy dostęp oraz przyśpieszamy adopcję Web3."
        />
        <CardBlank
          name="Czas to najcenniejszy skarb" 
          imageUrl="/fte.png" 
          href="/projects/currency"
          description="Dąży do wypełnienia luki edukacyjnej istniejącej pomiędzy tradycyjnymi instytucjami akademickimi a dynamicznie rozwijającym się światem nowych technologii. Naszym celem jest przygotowanie profesjonalistów do konkurencji na globalnym rynku technologicznym."
        />
      </div>
      <div className={styles['cards-container']}>
        <CardBlank
          name="Globalny system lokalnych walut" 
          imageUrl="/FUNDchain.png" 
          href="/projects/currency"
          description="Startup chce zdobyć kapitał na rozwój nowej aplikacji, a może chcesz wprowadzić usługę typu sharing economy. Za pośrednictwem FUNDchain zaprezentujesz swój projekt, a inwestorzy indywidualni będą mogli wspierać Twój projekt w zamian za udział w zyskach."
        />
        <CardBlank
          name="IoT & AI: Polski Lider Rewolucji 4.0!" 
          imageUrl="/LUMINEK.png" 
          href="/projects/currency"
          description="Jesteśmy wiodącą firmą technologiczną łączącą rozwiązania IoT i SI w Polsce. Wewnątrz naszej organizacji pracujemy nad wieloma wyzwaniami związanymi z Rewolucją Przemysową 4.0. Tworzenienie technologii, która jest użyteczna, łatwa w użyciu, a przede wszystkim etyczna."
        />
        <CardBlank
          name="Mniej wody, ziemi - więcej żywności" 
          imageUrl="/verti.png" 
          href="/projects/currency"
          description="W sercu gwarnych miast, gdzie przestrzeń staje się coraz bardziej cennym zasobem, Vertifarm wznosi zielone wieżowce, które są symbolem odnowy i wizji przyszłości. Tworzymy miejsca, które łączą innowacje z estetyką, przekształcając betonowe dżungle w oazy świeżości."
        />
        <Card
          name="Tu może być Twój projekt" 
          imageUrl="/10_t.png" 
          href="/launchpad"
          description="Masz innowacyjny projekt gotowy do prezentacji światu? Zgłoś się do nas! Oferujemy akcelerację startupu oraz możliwość listowania na naszej giełdzie. Nie czekaj - przekształć wizję w rzeczywistość! 🚀"
        />
      </div>
    </div>
    <Footer />
    </>
  );
}
