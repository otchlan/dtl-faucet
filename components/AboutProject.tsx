//AboutProject.tsx
import React from 'react';
import styles from './AboutProject.module.css';

const AboutProject = () => {
    return (
        <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h1>Welcome to My Component</h1>
            <p>This component is styled to take up 96% of the width of its container.</p>
        </div>
        </div>
    );
};

export default AboutProject;
