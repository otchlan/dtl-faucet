import React from 'react';
import styles from './Dashboard.module.css';
import PickBatch from './PickBatch';

const Dashboard = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.leftColumn}>
        <img src="/dtl_fp.png" alt="Description of Image" className={styles.image}/>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.upperDiv}>
          <PickBatch />
        </div>
        <div className={styles.lowerDiv}>
          <div className={styles.subContainer}>
            <div className={styles.dataContainer}>
              <span className={styles.dataColor}>Symbol:</span>
              <span className={styles.answerColor}>DTL</span>
            </div>
            <div className={styles.dataContainer}>
              <span className={styles.dataColor}>Total Supply:</span>
              <span className={styles.answerColor}>200 000 000</span>
            </div>
            <div className={styles.dataContainer}>
              <span className={styles.dataColor}>Circulating Supply:</span>
              <span className={styles.answerColor}>[Circulating Supply]</span>
            </div>
            <div className={styles.dataContainer}>
              <span className={styles.dataColor}>Network:</span>
              <span className={styles.answerColor}>Polygon [ERC20]</span>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Dashboard;
