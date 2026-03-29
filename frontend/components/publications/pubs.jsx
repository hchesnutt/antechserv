import React from 'react';
import PubCard from './pub_card';
import Publications from './publications';
import { Element } from 'react-scroll';
import styles from './pubs.module.css';

const Pubs = () => (
  <Element name="pubs" className={styles.pubs}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <div className={styles.label}>// PUBLICATIONS //</div>
        <h2 className={styles.heading}>Research &amp; Reports</h2>
        <div className={styles.rule} />
      </div>
      <div className={styles.grid}>
        {Publications.map((pub, i) => (
          <PubCard key={i} {...pub} />
        ))}
      </div>
    </div>
  </Element>
);

export default Pubs;
