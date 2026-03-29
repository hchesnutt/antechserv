import React from 'react';
import peeps from './peeps';
import { Element } from 'react-scroll';

import styles from './people.css';

class People extends React.Component {
  render(){
    return(
      <Element name='people' className={styles.peopleSection}>
        <p className={styles.sectionLabel}>Who We Are</p>
        <h2 className={styles.sectionTitle}>Our Team</h2>
        <div className={styles.sectionDivider}></div>
        <div className={styles.teamGrid}>
          {peeps.map((person, i) => (
            <div key={i} className={styles.personCard}>
              <img
                src={person.imgSrc}
                alt={person.name}
                className={styles.personPhoto}
              />
              <h3 className={styles.personName}>{person.name}</h3>
              <p className={styles.personTitle}>{person.title}</p>
              <p className={styles.personLocation}>{person.location}</p>
              <div className={styles.personDivider}></div>
              <p className={styles.personBio}>{person.role}</p>
            </div>
          ))}
        </div>
      </Element>
    );
  }
}

export default People;
