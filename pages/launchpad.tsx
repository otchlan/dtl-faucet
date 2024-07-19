import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Card from "@/components/CardRev";
import CardBlank from "@/components/CardRevBlank";
import styles from './Home.module.css';
import Dropdown from '@/components/Dropdown';
//import Test from '@/components/Test';
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
    
    {/*
      <Test />
    */}

     <Dropdown />
      <div className={styles['cards-container']}>
        <Card
          name="Budujemy technologię jutra" 
          imageUrl="/logo.svg" 
          href="/projects/dtl"
          description="Jesteśmy pionierami w dziedzinie technologii, łączymy zaawansowane badania i praktyczne potrzeby. Pracujemy na styku inżynierii, nauk ścisłych oraz społeczno-ekonomicznych, dążąc do tworzenia rozwiązań, które napędzają postęp i przynoszą korzyści ludzkości."
        />
        <CardBlank
          name="Dopasowujemy SI dla każdego" 
          imageUrl="/randomAGI_4_t.png" 
          href="/projects/ragi"
          description="Specjalizujemy się w badaniach i rozwoju w dziedzinie sztucznej inteligencji, kreujemy przyszłość technologiczną dla przedsiębiorstw i konsumentów. Wykorzystując najświeższe technologie dostępne na rynku, tworzymy rozwiązania B2X."
        />
      </div>
      <div className={styles['cards-container']}>
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
