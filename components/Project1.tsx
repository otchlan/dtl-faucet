import React, { useState } from 'react';
import styles from './Project.module.css';


const StackedContainers: React.FC = () => {
  const [showAllocationDropdown, setShowAllocationDropdown] = useState<boolean>(false);

  const first_task = "Opracowanie interfejsu użytkownika dla panelu administratora z integracją asystenta AI.";
  const tasks = [
      "Zintegrować API płatności dla obsługi transakcji.",
      "Stworzyć system rejestracji i logowania dla użytkowników.",
      "Przetestować wydajność i bezpieczeństwo platformy.",
      "Zaprojektować i wdrożyć system powiadomień dla użytkowników.",
      "Opracować dokumentację API dla deweloperów.",
      "Zaplanować i wdrożyć strategię backupu danych.",
      "Zaimplementować mechanizmy zabezpieczające przed atakami DDoS.",
      "Zoptymalizować bazę danych pod kątem szybkości i niezawodności.",
      "Przeprowadzić audyt kodu pod kątem ewentualnych luk bezpieczeństwa.",
      "Zaprojektować landing page dla nowych użytkowników.",
      "Wprowadzić system oceny i recenzji dla projektów dodawanych do platformy.",
      "Zaimplementować wsparcie dla wielojęzyczności.",
      "Zaprojektować i wdrożyć system wsparcia dla użytkowników (chat, FAQ).",
      "Zaimplementować analitykę użytkowników, by śledzić ich zachowania i poprawiać UX.",
      "Opracować strategię marketingową dla promocji platformy.",
      "Zaimplementować funkcje społecznościowe, takie jak forum czy system komentarzy.",
      "Opracować mobilną wersję platformy lub dedykowaną aplikację.",
      "Zorganizować szkolenia dla zespołu w zakresie najnowszych technologii blockchain.",
      "Zaprojektować system nagród dla aktywnych i lojalnych użytkowników."
  ];


  return (
    <div className={styles.mainContainer}>
      {/* Top container */}
      <div className={styles.topContainer}>
        
        {/* First sub-container with an image */}
        <div className={styles.subContainer}>
          <img src="/randomAGI_4_t.png" alt="Description of Image" className={styles.image}/>
        </div>

        {/* Second sub-container with project data */}
        <div className={styles.subContainer}>
          <div className={styles.dataContainer}>
            <p className={styles.dataColor}>Symbol:</p>
            <p className={styles.answerColor}>DTL</p>
          </div>

          <div className={styles.dataContainer}>
            <p className={styles.dataColor}>Total Supply:</p>
            <p className={styles.answerColor}>200 000 000</p>
          </div>

          <div className={styles.dataContainer}>
            <p className={styles.dataColor}>Circulating Supply:</p>
            <p className={styles.answerColor}>[Circulating Supply]</p>
          </div>

          <div className={styles.dataContainer}>
            <p className={styles.dataColor}>Network:</p>
            <p className={styles.answerColor}>Polygon [ERC20]</p>
          </div>

 

{/*          <div className={styles.dataContainer}>
            <p className={styles.dataColor}>Allocation:</p>
            <p className={styles.answerColor} onClick={() => setShowAllocationDropdown(!showAllocationDropdown)}>▼ [Rozwiń]</p>
            {showAllocationDropdown && (
              <div className={styles.dropdown}>
                
                <p>Option 1</p>
                <p>Option 2</p>
                
              </div>
            )}
          </div>

          <div className={styles.dataContainer}>
          <p className={styles.dataColor}>Use case:</p>
            <p className={styles.answerColor} onClick={() => setShowAllocationDropdown(!showAllocationDropdown)}>▼ [Rozwiń]</p>
            {showAllocationDropdown && (
              <div className={styles.dropdown}>
                
                <p>Option 1</p>
                <p>Option 2</p>
                
              </div>
            )}
          </div>
          */}
        </div>


        {/* Third sub-container */}
        <div className={styles.subContainer}>

        <div className={styles.dataContainer}>
          <p className={styles.dataColor}>Strona internetowa</p>
          <p className={styles.answerColor}>deeptechlabs.pl</p>
        </div>

         <div className={styles.dataContainer}>
          <p className={styles.dataColor}>Pitch deck</p>
          <p className={styles.answerColor}>[Drzewo linków]</p>
        </div>

        <div className={styles.dataContainer}>
          <p className={styles.dataColor}>Adres [Hash]</p>
          <p className={styles.answerColor}>Polygon [ERC20]</p>
        </div>

        <div className={styles.dataContainer}>
          <p className={styles.dataColor}>Social media</p>
          <p className={styles.answerColor}>[Drzewo linków]</p>
        </div>
        </div>
      </div>

      {/* Bottom container */}
      <div className={styles.bottomContainer}>
              <div className={styles.sideBySideOneDiv}>
              <ul className={styles.listContainer}>
                         <p className={styles.highlighted}> {first_task} </p>
                         {tasks.map((task, index) => (
                             <p key={index} className={styles.taskItem}>{task}</p>
                         ))}
                     </ul>
              </div>
          <div className={styles.sideBySideTwoDiv}>
            <img src="/lanch.png" alt="Lanch Image" />
            
          </div>
        </div>
      </div>
  );
};

export default StackedContainers;
