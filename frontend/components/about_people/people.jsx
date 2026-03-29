import React from 'react';
import { Element } from 'react-scroll';
import styles from './people.module.css';
import tcPhoto from '../../../assets/tc_headshotphoto_2.jpg';
import dpPhoto from '../../../assets/dp_headshotphoto_1.jpg';
import dhPhoto from '../../../assets/dh_headshot_1.jpeg';

const peeps = [
  {
    photo: tcPhoto,
    name: 'Thomas W. Chesnutt',
    credentials: 'Ph.D., PStat, CAP',
    title: 'CEO',
    location: 'Encinitas, CA',
    role: 'Tom Chesnutt has pioneered innovative water rate reform, probability management, stochastic simulation and forecasting in the fields of water policy and economic modeling.',
  },
  {
    photo: dpPhoto,
    name: 'David Pekelney',
    credentials: 'Ph.D.',
    title: 'Director of Policy Analysis',
    location: 'Los Angeles, CA',
    role: 'David Pekelney has extensive experience analyzing financial, economic, and environmental policies in the areas of urban water conservation and planning, water recycling, and water demand.',
  },
  {
    photo: dhPhoto,
    name: 'Dana Holt',
    credentials: 'M.S.',
    title: 'Senior Information Scientist',
    location: 'Encinitas, CA',
    role: 'Dana Holt has over 26 years of experience in software and hardware project lifecycle development, software implementation, project management, technical writing, and training.',
  },
];

const PersonCard = ({ photo, name, credentials, title, location, role }) => (
  <div className={styles.card}>
    <div className={styles.photoWrap}>
      <img src={photo} alt={name} className={styles.photo} />
      <div className={styles.photoOverlay} />
    </div>
    <div className={styles.body}>
      <div className={styles.titleTag}>{title}</div>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.credentials}>{credentials}</div>
      <div className={styles.location}>// {location} //</div>
      <div className={styles.divider} />
      <p className={styles.role}>{role}</p>
    </div>
  </div>
);

const People = () => (
  <Element name="people" className={styles.people}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <div className={styles.label}>// TEAM //</div>
        <h2 className={styles.heading}>Our Experts</h2>
        <div className={styles.rule} />
      </div>
      <div className={styles.grid}>
        {peeps.map((p, i) => (
          <PersonCard key={i} {...p} />
        ))}
      </div>
    </div>
  </Element>
);

export default People;
