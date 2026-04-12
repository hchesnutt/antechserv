import React from 'react';
import PubCard from './pub_card';
import Publications from './publications';
import { Element } from 'react-scroll';

import styles from './pubs.module.css';

const Pubs = () => {
  return (
    <Element name='pubs'>
      <section className={styles.pubs}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>02</span>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionRule}></span>
            <span className={styles.sectionLabelText}>Selected Publications</span>
          </div>
        </div>

        <div className={styles.pubsInner}>
          <div className={styles.pubsList}>
            {Publications.map((pub, i) => (
              <PubCard key={i} index={i + 1} {...pub} />
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Pubs;
