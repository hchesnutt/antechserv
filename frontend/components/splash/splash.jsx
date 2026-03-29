import React from 'react';

import styles from './splash.module.css';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.splash}>
        {/* Left dark visual panel */}
        <div className={styles.leftPanel}>
          <span className={styles.bgLetters}>A&amp;N</span>
          <div className={styles.terrain3}></div>
          <div className={styles.terrain2}></div>
          <div className={styles.terrain1}></div>
        </div>

        {/* Right content panel */}
        <div className={styles.rightPanel}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine}></span>
            <span className={styles.eyebrowText}>A &amp; N Technical Services Inc.</span>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.headlinePlain}>Empirical</span>
            <em className={styles.headlineAccent}>Policy</em>
            <span className={styles.headlinePlain}>Analysis.</span>
          </h1>

          <p className={styles.subheadline}>
            National consulting firm specializing in water resources,
            financial expertise, and water efficiency programs.
          </p>

          <div className={styles.pillsRow}>
            <div className={styles.pill}>
              <span className={styles.pillNum}>30+</span>
              <span className={styles.pillLabel}>Years of Experience</span>
            </div>
            <div className={styles.pill}>
              <span className={styles.pillNum}>100K+</span>
              <span className={styles.pillLabel}>Customers Served</span>
            </div>
          </div>

          <div className={styles.scrollIndicator}>
            <span className={styles.scrollLabel}>Scroll</span>
            <div className={styles.scrollBar}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
