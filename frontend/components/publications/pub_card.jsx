import React from 'react';
import styles from './pub_card.module.css';

const PubCard = ({ link_url, image, header, text }) => (
  <a href={link_url} className={styles.card} target="_blank" rel="noopener noreferrer">
    <div className={styles.imageWrap}>
      <img src={image} alt={header} className={styles.image} />
      <div className={styles.overlay}>
        <span className={styles.viewLabel}>VIEW REPORT →</span>
      </div>
    </div>
    <div className={styles.body}>
      <div className={styles.label}>// PUBLICATION //</div>
      <h4 className={styles.header}>{header}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  </a>
);

export default PubCard;
