import React, { useState } from 'react';
import styles from './Project.module.css';
import Dropdownv2 from '@/components/Dropdownv2';
import DiscussSection from '@/components/DiscussSection';
import Dashboard from '@/components/Dashboard';


const StackedContainers: React.FC = () => {
  const [showAllocationDropdown, setShowAllocationDropdown] = useState<boolean>(false);

  const first_task = "Opracowanie interfejsu użytkownika dla panelu administratora z integracją asystenta AI.";
  const tasks = [
      "Opracowanie interfejsu użytkownika dla panelu administratora z integracją asystenta AI.",
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

  const [selectedTask, setSelectedTask] = useState(0);

  const handleTaskClick = (index: number) => {
    setSelectedTask(index);
  };


  return (
    <div className={styles.mainContainer}>

    <Dashboard />

      {/* Bottom container */}
      <div className={styles.bottomContainer}>
              <div className={styles.sideBySideOneDiv}>
              <ul className={styles.listContainer}>
                         {tasks.map((task, index) => (
                             <p key={index} className={`${styles.taskItem} ${selectedTask === index ? styles.highlighted : ''}`} onClick={() => handleTaskClick(index)}>{task}</p>
                         ))}
                     </ul>
              </div>
          <div className={styles.sideBySideTwoDiv}>
            <div className={styles.descriptionContainer}>
              <p className={styles.title}>Opracowanie interfejsu użytkownika dla panelu administratora z integracją asystenta AI</p>
              <p className={styles.subtitle}>Opis zadania:</p>
              <p className={styles.content}>Celem tego zadania jest stworzenie nowoczesnego, intuicyjnego i responsywnego interfejsu użytkownika dla panelu administratora, który pozwoli na efektywną komunikację z wbudowanym asystentem AI.</p>
              <p className={styles.subtitle}>Szczegółowe wymagania</p>
              <Dropdownv2 title="Title" description="Description" />
              <p className={styles.subtitle}>Wybierz rodzaj rozliczenia</p>
              <div className={styles.settlement}>
                <div className={styles.settleBox}>
                  <p className={styles.boxTitle}>Krypto/FIAT</p>
                  <p className={styles.boxContent}>200 DTL</p>
                  <p className={styles.boxContent}>500 zł</p>
                </div>
                <div className={styles.settleBox}>
                  <p className={styles.boxTitle}>Krypto</p>
                  <p className={styles.boxContent}>200 DTL</p>
                  <p className={styles.boxContent}>0.08 ETH</p>
                </div>
                <div className={styles.settleBox}>
                  <p className={styles.boxTitle}>Krypto</p>
                  <p className={styles.boxContent}>520 DTL</p>
                </div>
              </div>
              <DiscussSection title="Title" description="Description" />
            </div> 
          </div>
        </div>
      </div>
  );
};

export default StackedContainers;
