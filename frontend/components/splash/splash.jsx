import React from 'react';

import styles from './splash.css';
import DitheredLogo from './DitheredLogo';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className={styles.splash}>
          <div className={styles.splashLogoArea}>
            <DitheredLogo />
          </div>
        </div>
    );
  };

}

export default Splash;
