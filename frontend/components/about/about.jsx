import React from 'react';
import { Element } from 'react-scroll';
import styles from './about.module.css';

const About = () => (
  <Element name="about" className={styles.about}>
    <div className={styles.inner}>
      <div className={styles.logoCol}>
        <div className={styles.logoWrap}>
          <img
            src="https://s3-us-west-1.amazonaws.com/antechserv/A%26N_logotype_med.png"
            className={styles.logo}
            alt="A&N Technical Services"
          />
        </div>
      </div>
      <div className={styles.textCol}>
        <div className={styles.label}>// ABOUT //</div>
        <h2 className={styles.heading}>National Consulting.<br/>Empirical Analysis.</h2>
        <div className={styles.rule} />
        <p className={styles.text}>
          Welcome to A &amp; N Technical Services Inc. We are a national consulting
          firm specializing in empirical policy analysis. We provide state-of-the-art
          financial expertise applied to water resources and water efficiency programs.
        </p>
        <div className={styles.specs}>
          <div className={styles.spec}>
            <span className={styles.specValue}>National</span>
            <span className={styles.specLabel}>Reach</span>
          </div>
          <div className={styles.specDivider} />
          <div className={styles.spec}>
            <span className={styles.specValue}>30+</span>
            <span className={styles.specLabel}>Years</span>
          </div>
          <div className={styles.specDivider} />
          <div className={styles.spec}>
            <span className={styles.specValue}>Water</span>
            <span className={styles.specLabel}>Policy</span>
          </div>
        </div>
      </div>
    </div>
  </Element>
);

export default About;
