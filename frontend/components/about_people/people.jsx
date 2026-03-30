import React from 'react';
import { Element } from 'react-scroll';
import styles from './people.module.css';
import peeps from './peeps';

const People = () => {
  return (
    <Element name='people'>
      <section className={styles.people}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>03</span>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionRule}></span>
            <span className={styles.sectionLabelText}>Our Team</span>
          </div>
        </div>

        <div className={styles.peopleInner}>
          <div className={styles.grid}>
            {peeps.map((person, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.photoWrap}>
                  <img src={person.imgSrc} alt={person.name} className={styles.photo} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.name}>{person.name}</h3>
                  </div>
                  <p className={styles.title}>{person.title}</p>
                  <p className={styles.location}>{person.location}</p>
                  <div className={styles.cardDivider}></div>
                  <p className={styles.bio}>{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default People;
