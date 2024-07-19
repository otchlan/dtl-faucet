import React from "react";
import Card from "@/components/grid-list/card";

const GridList = () => {
  return (
    <div
      id="Uslugi"
      className="flex flex-col items-center justify-center py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto"
    >
      <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-100 sm:pb-16 lg:text-4xl">
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Card
          title="Interdyscyplinarność"
         description="Specjalizujemy się w łączeniu różnorodnych technologii, wykorzystywaniu podejść badawczo-rozwojowych i fachowej wiedzy posiadanej przez zespół naszych specjalistów. Kładziemy silny nacisk na umiejętności cyfrowe i kompetencje umysłowe, aby tworzyć zaawansowane technologie, które przyczyniają się do rozwoju naszego cyfrowego społeczeństwa. Poprzez łączenie naszej wiedzy pochodzącej z różnych dziedzin, napędzamy innowacje i kształtujemy przyszłość technologii."
          image="11_t.png"
        />
        <Card
          title="Wdrażanie innowacji"
         description="Jesteśmy liderami innowacji. Nasze wyspecjalizowane zespoły ekspertów prowadzą wewnętrzne badania i opracowują nowe rozwiązania, aby być na czele światowej czołówki. Poprzez testowanie i udoskonalanie naszych innowacji zapewniamy im najwyższą skuteczność i stabilną jakość. Dajemy również możliwość dostępu do tych przełomowych rozwiązań naszym partnerom, umożliwiając im osiągnięcie własnego sukcesu dzięki wdrażaniu innowacji."
          image="./9_t.png"
        />
        <Card
          title="Planowanie strategiczne"
         description="Skuteczne planowanie strategiczne umożliwia organizacjom przewidywanie i proaktywne podejmowanie działań w obliczu pojawiających się wyzwań, a także wykorzystywanie nadarzających się szans oraz zachowanie zwinności w szybko zmieniającym się środowisku biznesowym. Dzięki naszym specjalistycznym usługom spójność organizacyjną, łącząc interesariuszy i kluczowych decydentów w celu współpracy przy definiowaniu jasnej wizji, wyznaczaniu celów i ustalaniu konkretnych planów działania. Takie podejście oparte na współpracy napędza zaangażowanie, poczucie odpowiedzialności za kierunek strategiczny."
          image="/5_t.png"
        />
      </div>
    </div>
  );
};

export default GridList;

