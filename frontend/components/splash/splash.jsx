import React from 'react';
import { Element } from 'react-scroll';
import styles from './splash.module.css';

const Splash = () => (
  <Element name="splash" className={styles.splash}>
    <div className={styles.content}>
      <div className={styles.eyebrow}>// EST. CALIFORNIA //</div>
      <h1 className={styles.title}>
        A&amp;N<br/>
        <span className={styles.titleSub}>TECHNICAL</span><br/>
        <span className={styles.titleSub}>SERVICES</span>
      </h1>
      <div className={styles.divider} />
      <p className={styles.subtitle}>
        Empirical Policy Analysis for Water Resources &amp; Conservation
      </p>
      <div className={styles.meta}>
        <span className={styles.metaItem}>NATIONAL CONSULTING FIRM</span>
        <span className={styles.metaDot}>·</span>
        <span className={styles.metaItem}>WATER EFFICIENCY PROGRAMS</span>
        <span className={styles.metaDot}>·</span>
        <span className={styles.metaItem}>FINANCIAL EXPERTISE</span>
      </div>
    </div>
    <div className={styles.scrollIndicator}>
      <span className={styles.scrollText}>SCROLL</span>
      <div className={styles.scrollLine} />
    </div>
  </Element>
);

export default Splash;
