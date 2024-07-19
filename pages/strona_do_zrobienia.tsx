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
         <p> Pracujemy jeszcze nad tą stroną, zapraszamy wkótce.</p>
            <br />
            <br />
          <p> Chcesz się z nami skontaktować pisz śmiało kontakt(@)deeptechlabs.pl </p>
            <br />
            <br />
          <p> Jeśli chiałbyś/chciałabyś pracować nad stworzeniem tej strony napisz rekrutacja(@)deeptechlabs.pl </p>
          <p> Wyślij nam swoje portfolio, napisz kim jesteś czym się interesujesz, jak widzisz siebie za rok, 5 lat i 10 lat</p>
      </MarginDiv>
    </div>


      <Footer />
    </>
  );
}
