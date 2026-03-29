import React from 'react';
import PubCard from './pub_card';
import Publications from './publications';
import { Element } from 'react-scroll';

import styles from './pubs.module.css';

class Pubs extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Element name='pubs' className={styles.pubs}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div className={styles.sectionLabel}>
              <span className={styles.labelLine}></span>
              <span className={styles.labelText}>Publications</span>
            </div>
            <h2 className={styles.heading}>Research &amp; Reports</h2>
          </div>

          <ul className={styles.pubsList}>
            {Publications.map((pubSingle, i) => (
              <li key={i} className={styles.pubItem}>
                <PubCard {...pubSingle}/>
              </li>
            ))}
          </ul>
        </div>
      </Element>
    );
  }
}

export default Pubs;
