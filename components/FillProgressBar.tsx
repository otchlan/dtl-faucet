import React from 'react';
import styles from './FillProgressBar.module.css';

interface FillProgressBarProps {
  type?: string; // 'fill'
  path?: string;
  img?: string;
  imgSize?: string;
  fillDir?: 'btt' | 'ttb' | 'ltr' | 'rtl';
  min?: number;
  max?: number;
  precision?: string;
  fillBackground?: string;
  fillBackgroundExtrude?: string;
  value: number;
}

const FillProgressBar: React.FC<FillProgressBarProps> = ({
  type = 'fill',
  path,
  img,
  imgSize,
  fillDir = 'ltr',
  min = 0,
  max = 100,
  precision,
  fillBackground,
  fillBackgroundExtrude,
  value,
}) => {
  // Calculate percentage (handle data-min and data-max if provided)
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      data-type={type}
      data-path={path}
      data-img={img}
      data-img-size={imgSize}
      data-fill-dir={fillDir}
      data-precision={precision}
      data-fill-background={fillBackground}
      data-fill-background-extrude={fillBackgroundExtrude}
      style={{ width: `${percentage}%` }}
    >
      {percentage}
    </div>
  );
};

const ContainerComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <FillProgressBar value={50} />
      </div>
      <div className={styles.rightDiv}></div>
    </div>
  );
};

export default ContainerComponent;
