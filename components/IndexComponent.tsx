/*IndexComponent.tsx */
import React from 'react';
import styles from './IndexComponent.module.css';

const IndexComponent: React.FC = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.childDiv} ${styles.topChild}`}>
      <div className={styles.leftSide30}>
        {/* Adjust the src attribute to point to assistant.png located in the public directory */}
        <img src="/dtl_main_1_m.png" alt="Assistant" className={styles.image} />
      </div>
        <div className={styles.rightSide70}> Tworzymy suwerenną platformę zaprojektowaną, by stawić czoła wyzwaniom pojawiającym się w obecnym systemie neokapitalistycznym i neoliberalnym. Nasza organizacja ma na celu stworzenie przestrzeni, która będzie własnością i pod kontrolą osób, które ją tworzą i rozwijają. Naszym zamierzeniem jest nie tylko przeciwdziałanie negatywnym aspektom dominującego modelu gospodarczego, ale również promowanie sprawiedliwości społecznej, równości i rozwoju. Platforma ma za zadanie oferować narzędzia i rozwiązania, które umożliwią budowanie silniejszych, bardziej zintegrowanych wspólnot opartych na współpracy, wzajemnym wsparciu i wspólnym dobru. Pragniemy, aby była to przestrzeń otwarta dla innowacji, gdzie każdy uczestnik ma realny wpływ na kształtowanie przyszłości platformy. Jest to odpowiedź na rosnące zapotrzebowanie na alternatywne modele gospodarcze, które mogą lepiej służyć potrzebom i wartościom społeczeństwa. Poprzez naszą platformę dążymy do stworzenia ekosystemu, który umożliwi realizację projektów z różnych dziedzin – od technologii, przez edukację, aż po sztukę i kulturę – wszystko to w duchu odpowiedzialności społecznej i ekologicznej. </div>
      </div>
      <div className={`${styles.childDiv} ${styles.middleChild}`}>
        <div className={styles.leftSide70}> Nasza wizja zakłada, że każdy członek społeczności ma równy dostęp do zasobów i możliwości, jakie oferuje platforma, co stanowi podstawę do budowania bardziej sprawiedliwego i inkluzywnego społeczeństwa. W ten sposób chcemy wykorzystać potencjał nowych technologii i innowacyjnych rozwiązań, by zmieniać świat na lepsze, oferując realne alternatywy dla istniejących systemów i praktyk. Rozwijając naszą wizję tej platformy, pragniemy również zaimplementować sztuczną inteligencję, która odegra kluczową rolę w monitorowaniu systemu w poszukiwaniu wszelkich nadużyć oraz będzie wspierać rozwój systemu w taki sposób, aby żaden zewnętrzny wpływ nie był w stanie go przejąć. Sztuczna inteligencja ma za zadanie nie tylko chronić platformę przed próbami manipulacji czy nieuczciwymi praktykami, ale również optymalizować procesy decyzyjne i operacyjne, aby zapewnić jak największą efektywność i sprawiedliwość działania. </div>
        <div className={styles.rightSide30}>
          <img src="/dtl_main_2_m.png" alt="Assistant" className={styles.image} />
        </div>
      </div>
      <div className={`${styles.childDiv} ${styles.bottomChild}`}>
        <div className={styles.leftSide30}>
          <img src="/assistant.png" alt="Assistant" className={styles.image} />
        </div>
        <div className={styles.rightSide70}> Dzięki wykorzystaniu zaawansowanych algorytmów AI, nasza platforma będzie w stanie dynamicznie reagować na zmieniające się warunki i potrzeby użytkowników, a także przewidywać potencjalne wyzwania i automatycznie adaptować się do nich. Sztuczna inteligencja stanie się nie tylko narzędziem do zarządzania i ochrony systemu, ale także motorem napędowym innowacji, umożliwiającym rozwój nowych funkcjonalności i usług, które będą w pełni odpowiadać na oczekiwania i wartości naszej społeczności. Integracja sztucznej inteligencji z platformą typu DAO to krok w kierunku budowania inteligentnego, zabezpieczonego i samoregulującego się ekosystemu, który będzie wzorem dla przyszłych inicjatyw zmierzających do tworzenia bardziej otwartych, sprawiedliwych i zrównoważonych form organizacji społeczno-gospodarczych. W ten sposób chcemy zapewnić, że rozwój naszej platformy będzie prowadzony w sposób transparentny, etyczny i skoncentrowany na dobru wspólnym, unikając wszelkich ryzyk związanych z nadużyciami i manipulacją.</div>
      </div>

      <div className={styles.buttonContainer}>  
              <a href="https://deeptechlabs.notion.site/Konstytucja-Narodu-Cyfrowo-Fizycznego-c4df112866e140109e3c3cec2c8edd0c?pvs=74" target="_blank" rel="noopener noreferrer">
                <button className={styles.externalLinkButton}>Konstytucja DTL</button>
              </a>
            </div>
    </div>

  );
};

export default IndexComponent;
