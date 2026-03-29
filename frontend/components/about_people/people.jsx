import React from 'react';
import peeps from './peeps';
import { Element } from 'react-scroll';

import styles from './people.module.css';

const People = () => (
  <Element name='people' className={styles.people}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelLine}></span>
          <span className={styles.labelText}>Our Team</span>
        </div>
        <h2 className={styles.heading}>The People</h2>
      </div>

      <div className={styles.grid}>
        {peeps.map((person, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.photoWrap}>
              <img src={person.imgSrc} alt={person.name} className={styles.photo} />
              <div className={styles.photoGradient}></div>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.titleTag}>{person.title}</span>
              <h3 className={styles.name}>{person.name}</h3>
              <p className={styles.location}>
                <span className={styles.locationDot}></span>
                {person.location}
              </p>
              <p className={styles.role}>{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Element>
);

export default People;
