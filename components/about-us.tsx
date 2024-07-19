import React from "react";
import Link from "next/link";
import OneDivNoBorder from "@/components/OneDivNoBorder";

const AboutUs = () => {
  return (
    <div
      id="Onas"
      className="pt-9 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto"
    >

    <OneDivNoBorder content= "Odkryj moc innowacji z nami i daj skrzydeł młodym talentom! Wybierając naszą usługę, nie tylko korzystasz z najnowszych rozwiązań technologicznych, ale również inwestujesz w przyszłość. Aż 40% naszych zysków przeznaczamy na realizację ambitnych projektów start-upowych prowadzonych przez młodych naukowców." />
    <OneDivNoBorder content= "Nie jesteśmy zwykłą firmą – jesteśmy mostem łączącym dzisiejsze potrzeby z jutrzejszymi rozwiązaniami. Współpracując z nami, stajesz się częścią dynamicznej społeczności, która wierzy w siłę nauki i innowacji jako narzędzia do zmiany świata na lepsze." />
    <OneDivNoBorder content= "Zapewniamy nie tylko najwyższą jakość usług, ale także transparentność i odpowiedzialność społeczną. Dlatego, jeśli chcesz, żeby Twoje pieniądze pracowały nie tylko dla Ciebie, ale i dla przyszłych pokoleń – jesteśmy najlepszym wyborem." />
    <OneDivNoBorder content= "Dołącz do nas i razem zainwestujmy w przyszłość pełną innowacji i możliwości. Nie czekaj, czas działać już teraz!" />
    

      <div className="flex flex-col justify-between lg:flex-row">
        <div className="lg:w-12/12 flex w-full flex-col justify-center px-4 sm:px-0">
          <p className="text-center text-base font-normal leading-6 text-gray-500">
            <span className="text-white">deeptechlabs</span>, czyli laboratorium zaawansowanych technologii zajmujemy się:
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> zarządzaniem projektami,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> doradztwem strategicznym,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> prowadzeniem prac badawczo-rozwojowych, tworzeniem innowacji oraz tworzeniem nauki,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> wprowadzaniem i budowaniem technologii,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> świadczeniem usług typu think tank,
            <br />
            <img src="/favicon.png" alt="Favicon" className="inline-block w-3 h-4" /> prowadzeniem szkoleń z zakresu wykorzystywania i implementacji technologii w społecznościach.
            <br />
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="flex w-full flex-col justify-center px-4 sm:px-0 lg:w-full"></div>
      </div>
    </div>
  );
};

export default AboutUs;

