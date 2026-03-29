import React from 'react';
import { Element } from 'react-scroll';

import styles from './about.module.css';

class About extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Element name='about' className={styles.about}>
        <div className={styles.inner}>
          <div className={styles.leftCol}>
            <div className={styles.logoWrap}>
              <img
                src={'https://s3-us-west-1.amazonaws.com/antechserv/A%26N_logotype_med.png'}
                className={styles.logo}
                alt="A&N Technical Services"
              />
            </div>
            <div className={styles.tagline}>
              <span className={styles.taglineLabel}>Specialty</span>
              <span className={styles.taglineValue}>Water Resources &amp; Policy</span>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.sectionLabel}>
              <span className={styles.labelLine}></span>
              <span className={styles.labelText}>About</span>
            </div>

            <h2 className={styles.heading}>
              State-of-the-art financial expertise applied to water resources.
            </h2>

            <p className={styles.body}>
              A &amp; N Technical Services Inc. is a national consulting firm specializing
              in empirical policy analysis. We provide state-of-the-art financial expertise
              applied to water resources and water efficiency programs.
            </p>

            <ul className={styles.highlights}>
              <li className={styles.highlight}>
                <span className={styles.diamond}></span>
                Empirical policy analysis and research
              </li>
              <li className={styles.highlight}>
                <span className={styles.diamond}></span>
                Water use efficiency program design
              </li>
              <li className={styles.highlight}>
                <span className={styles.diamond}></span>
                Rate structure modeling and benchmarking
              </li>
              <li className={styles.highlight}>
                <span className={styles.diamond}></span>
                Municipal and regional water planning
              </li>
            </ul>
          </div>
        </div>
      </Element>
    )
  }
}

export default About;
