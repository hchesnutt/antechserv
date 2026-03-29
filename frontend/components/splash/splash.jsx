import React from 'react';

import styles from './splash.module.css';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.splash}>
        <div className={styles.radialGlow}></div>
        <div className={styles.gridOverlay}></div>

        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            <span className={styles.eyebrowText}>A &amp; N Technical Services Inc.</span>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.headlineTop}>Empirical Policy</span>
            <span className={styles.headlineBottom}>
              Analysis<span className={styles.accentDot}>.</span>
            </span>
          </h1>

          <p className={styles.subheadline}>
            National consulting firm specializing in water resources,<br/>
            financial expertise, and water efficiency programs.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>30<span className={styles.statSuffix}>+</span></span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100K<span className={styles.statSuffix}>+</span></span>
              <span className={styles.statLabel}>Customers Served</span>
            </div>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLabel}>Scroll</span>
          <div className={styles.scrollBar}></div>
        </div>
      </div>
    );
  }
}

export default Splash;
