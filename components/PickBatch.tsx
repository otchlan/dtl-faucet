import React, { useState } from 'react';
import styles from './Dashboard.module.css';

// Define the structure of a batch using TypeScript interface
interface Batch {
  fullAmount: number;
  currentAmount: number;
  gateway: string;
}

// Define an interface for the batches object
interface Batches {
  [key: string]: Batch;
}

const PickBatch: React.FC = () => {
  const [activeBatch, setActiveBatch] = useState<string>('batch1');

  const batches: Batches = {
    batch1: {
      fullAmount: 100,
      currentAmount: 30,
      gateway: 'Gateway content for Batch 1.'
    },
    batch2: {
      fullAmount: 200,
      currentAmount: 120,
      gateway: 'Gateway content for Batch 2.'
    },
    batch3: {
      fullAmount: 1500,
      currentAmount: 150,
      gateway: 'Gateway content for Batch 3.'
    }
  };

  // Calculate the progress as a percentage
  const getProgress = (batch: Batch): number => {
    return (batch.currentAmount / batch.fullAmount) * 100;
  };

  return (
    <div className={styles.upperDiv}>
      <div className={styles.batchDiv}>
        <button className={`${styles.batchButton} ${activeBatch === 'batch1' ? styles.active : ''}`} onClick={() => setActiveBatch('batch1')}>Batch 1</button>
        <button className={`${styles.batchButton} ${activeBatch === 'batch2' ? styles.active : ''}`} onClick={() => setActiveBatch('batch2')}>Batch 2</button>
        <button className={`${styles.batchButton} ${activeBatch === 'batch3' ? styles.active : ''}`} onClick={() => setActiveBatch('batch3')}>Batch 3</button>
      </div>
      <div className={styles.progressDiv}>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${getProgress(batches[activeBatch])}%` }}></div>
        </div>
        <div className={styles.progressInfo}>
          <span className={styles.amount}>{batches[activeBatch].currentAmount} / {batches[activeBatch].fullAmount}</span>
          <span className={styles.percentage}>{getProgress(batches[activeBatch]).toFixed(1)}%</span>
        </div>
      </div>
      <div className={styles.gatewayDiv}>{batches[activeBatch].gateway}</div>
    </div>
  );
};

export default PickBatch;
