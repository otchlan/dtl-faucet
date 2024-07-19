import React from 'react';
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Footer from "@/components/footer";
import Head from 'next/head';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import TokenMinter from '@/components/auth/TokenMinter'; // Correct import path for TokenMinter

export default function Home() {
  return (
    <>
      <Head>
        <title>Centrum SI</title>
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
          className="py-8 md:64 main-div"
          style={{ maxWidth: "94%", margin: "0 auto" }}
        >
          <motion.h1
            className="bg-gradient-to-br from-black to-green-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            Welcome to Deeptechlabs
          </motion.h1>
        </div>
      </motion.div>

      <TokenMinter /> {/* Now correctly integrated using the proper path */}

      <Footer />
    </>
  );
}
