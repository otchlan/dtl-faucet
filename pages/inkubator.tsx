//pages/inkubator.tsx
'use client'
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import CardCSI1 from "@/components/CardCSI1";
import CardCSI2 from "@/components/CardCSI2";
import OscillatingLine from "@/components/SepLine";
import Head from 'next/head';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CardRev from "@/components/CardRev";
import CardWithPopup from '@/components/CardWithPopup';

// Assuming Carousel is properly imported if you're going to use it
// import Carousel from "@/components/CarouselCSI";

export default function Home() {
  return (
    <>
      <Head>
          <title>Inkubator</title>
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
        <div
          className="py-8 main-div"
          style={{ maxWidth: "94%", margin: "0 auto" }}
        >
          <motion.h1
            className="bg-gradient-to-br from-black to-green-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>Inkubator</Balancer>
          </motion.h1>

          <div className="text-center text-gray-500 mt-16 md:text-xl">
            Skauting, nawiązywanie kontaktów i doradztwo to kluczowe aspekty działalności, mającej na celu wspieranie projektów na różnych etapach ich rozwoju. Analizując rynek i łącząc biznesy, wykorzystując przy tym rozległą sieć kontaktów branżowych, pomagamy inicjatywom wzrastać. Naszym celem jest nie tylko pomoc w rozwoju, ale także otwarcie drzwi do nowych możliwości. Każdy projekt ma potencjał, który staramy się maksymalnie wykorzystać. Finalnie, wszystkie nasze działania skoncentrowane są na przygotowaniu projektów do wejścia na launchpad, gdzie innowacyjne pomysły spotykają się z realnymi możliwościami ich realizacji.
          </div>

          <OscillatingLine />
        </div> 

        {/*
        <div style={{ maxWidth: "94%", margin: "auto", paddingTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>          
        <CardRev
            name="Example Project 1"
            imageUrl="/path/to/image.jpg"
            href="/"
            description="This is a description of the example project 1."
          />
          <CardRev
            name="Example Project 1"
            imageUrl="/path/to/image.jpg"
            href="/"
            description="This is a description of the example project 1."
          />
        </div>
        <div style={{ maxWidth: "94%", margin: "auto", paddingTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>          
             <CardWithPopup
               name="Example Project 1"
               imageUrl="/path/to/image1.jpg"
               description="This is a description for Example Project 1."
             />
             <CardWithPopup
               name="Example Project 2"
               imageUrl="/path/to/image2.jpg"
               description="This is a description for Example Project 2."
             />
        </div>
      */}

        <div
          className="py-2 main-div"
          style={{ maxWidth: "94%", margin: "0 auto" }}
        >
          <div className="text-center text-gray-200 mt-16 md:text-xl">
            <p>Badamy, testujemy, budujemy.</p>
            <p>Obecnie prowadzimy 5 inkubacji, chcesz do nas dołączyć lub z nami pracować? Napisz:</p>
            <p>inkubator@deeptechlabs.pl</p>
          </div>
        </div> 

        <Footer />
      </motion.div>
    </>
  );
}
