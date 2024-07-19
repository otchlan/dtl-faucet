// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import { Web3Provider } from '../hooks/Web3Context';
import cx from "classnames";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";
import StickyTopComponent from "@/components/StickyTopComponent"; // Ensure this path is correct

// Define your custom fonts
const sfPro = localFont({
  src: "../styles/SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <RWBProvider>
        <Web3Provider>
          <StickyTopComponent /> {/* StickyTopComponent rendered on all pages */}
          <Navbar />
          <div className={cx(sfPro.variable, inter.variable)}>
            <main className="w-full flex flex-col items-center justify-center bg-black py-32">
              <Component {...pageProps} />
            </main>
          </div>
        </Web3Provider>
      </RWBProvider>
      <Analytics />
    </SessionProvider>
  );
}
