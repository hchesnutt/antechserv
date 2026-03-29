import React from 'react';
import { Element } from 'react-scroll';

import styles from './about.css';

class About extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Element name='about' className={styles.about}>
        <div className={styles.splashLogoArea}>
          <img src={'https://s3-us-west-1.amazonaws.com/antechserv/A%26N_logotype_med.png'} className={styles.splashLogo} />
        </div>
        <p className={styles.tagline}>Data Analytics &amp; Policy Consulting</p>
        <div className={styles.divider}></div>
        <div className={styles.aboutText}>
          A national consulting firm specializing in empirical policy analysis.
          We provide state-of-the-art financial expertise applied to water resources
          and water efficiency programs.
        </div>
      </Element>
    )
  }
}

export default About;
