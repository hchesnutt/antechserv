import React from 'react';
import { Link } from 'react-scroll';
import styles from './splash.module.css';

const Splash = () => {
  return (
    <div className={styles.splash}>
      {/* Left editorial column — 60% */}
      <div className={styles.splashLeft}>
        <div className={styles.splashContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowRule}></span>
            <span className={styles.eyebrowText}>Vol. I &mdash; Water Policy Analysis</span>
          </div>

          <h1 className={styles.headline}>
            A &amp; N<br />
            <em className={styles.headlineItalic}>Technical</em><br />
            Services
          </h1>

          <p className={styles.subheadline}>
            Empirical policy analysis for the nation's water future.
          </p>

          <div className={styles.tags}>
            <span className={styles.tag}>Water Resources</span>
            <span className={styles.tagDot}>·</span>
            <span className={styles.tag}>Rate Design</span>
            <span className={styles.tagDot}>·</span>
            <span className={styles.tag}>Efficiency Programs</span>
          </div>
        </div>

        <Link to="about" smooth={true} offset={-72} duration={700} className={styles.scrollCue}>
          <span className={styles.scrollLabel}>Scroll to explore</span>
          <span className={styles.scrollArrow}>↓</span>
        </Link>
      </div>

      {/* Right green block — 40% */}
      <div className={styles.splashRight}>
        <div className={styles.splashRightInner}>
          <p className={styles.rightQuote}>
            "Nothing is so difficult as not deceiving oneself."
          </p>
          <p className={styles.rightAttrib}>— Ludwig Wittgenstein</p>
          <div className={styles.rightDivider}></div>
          <p className={styles.rightDesc}>
            State-of-the-art financial expertise applied to water resources
            and water efficiency programs, serving municipalities and agencies
            across the nation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
