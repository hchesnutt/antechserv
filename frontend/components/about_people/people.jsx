import React from 'react';
import { Element } from 'react-scroll';
import styles from './people.module.css';

import tcPhoto from '../../../assets/tc_headshotphoto_2.jpg';
import dpPhoto from '../../../assets/dp_headshotphoto_1.jpg';
import dhPhoto from '../../../assets/dh_headshotphoto_1.jpg';

const teamMembers = [
  {
    photo: tcPhoto,
    name: 'Thomas Chesnutt',
    credentials: 'Ph.D.',
    title: 'Principal',
    location: 'California',
    bio: 'Thomas leads the firm\'s empirical policy research, specializing in water use efficiency benchmarking, rate structure design, and demand forecasting for municipal water utilities.',
  },
  {
    photo: dpPhoto,
    name: 'David Perez',
    credentials: 'M.S.',
    title: 'Senior Associate',
    location: 'California',
    bio: 'David brings expertise in financial modeling and cost-of-service analysis, with a track record of developing conservation programs and rate structures for agencies throughout the Western United States.',
  },
  {
    photo: dhPhoto,
    name: 'Dana Haasz',
    credentials: 'M.P.P.',
    title: 'Policy Analyst',
    location: 'California',
    bio: 'Dana focuses on the intersection of policy and data, developing regulatory frameworks and legislative analysis that guide efficient and equitable water governance.',
  },
];

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
            {teamMembers.map((person, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.photoWrap}>
                  <img src={person.photo} alt={person.name} className={styles.photo} />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.name}>{person.name}</h3>
                    <span className={styles.credentials}>{person.credentials}</span>
                  </div>
                  <p className={styles.title}>{person.title}</p>
                  <p className={styles.location}>{person.location}</p>
                  <div className={styles.cardDivider}></div>
                  <p className={styles.bio}>{person.bio}</p>
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
