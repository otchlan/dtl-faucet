import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import MarginDiv from "@/components/Vert1Div";
import styles from './Home.module.css'; // Assuming this is the correct path


export default function Home() {
  return (
    <>

    <div className={styles['cards-container']}> 
      <MarginDiv>
            <br />
            <br />
            <br />
            <br />
            <br />
          <p> Chcesz się z nami skontaktować pisz śmiało centrumsi@deeptechlabs.pl </p>
            <br />
            <br />
            <br />
            <br />
            <br />
      </MarginDiv>
    </div>


      <Footer />
    </>
  );
}
