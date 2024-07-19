//index.tsx
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import MainIntro from "@/components/MainIntro";
import Link from "next/link";
import IndexComponent from '@/components/IndexComponent';
import Head from 'next/head';
import GoogleAnalytics from '@/components/GoogleAnalytics';


export default function Home() {
  return (
    <div>

      <Head>
        <title>deeptechlabs</title>
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

        <div className="py-8 flex flex-col">
          <MainIntro />

        </div>

        
        <IndexComponent />

         <motion.p
            className="mt-6 text-center text-gray-500 md:text-xl"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
          
          </motion.p>

        

      

        <Footer />
      </motion.div>
    </div>
  );
}


