import React from 'react';

import styles from './splash.css';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className={styles.splash}>
          <div className={styles.splashLogoArea}>
            <img src={'../assets/an_logo/A&N_logotype_med.png'} className={styles.splashLogo}/>
          </div>
        </div>
    );
  };

}

export default Splash;
