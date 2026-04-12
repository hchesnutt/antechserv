import React, { Component } from 'react';
import styles from './ContactAbout.module.css';

class ContactAbout extends Component {
  render() {
    return (
      <div className={styles.contactAboutContainer}>
        <h2 className={styles.headline}>
          Let's discuss your<br />
          <em>water policy challenges</em>
        </h2>

        <p className={styles.intro}>
          We work with municipal water utilities, state agencies, and regional
          districts nationwide. Reach out to explore how empirical analysis can
          strengthen your program.
        </p>

        <div className={styles.infoBlocks}>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Specialty</span>
            <span className={styles.infoValue}>
              Water rate design, efficiency planning,
              financial modeling &amp; policy analysis
            </span>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Scope</span>
            <span className={styles.infoValue}>
              National — with deep roots in California
              and the Western United States
            </span>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Locations</span>
            <span className={styles.infoValue}>
              San Diego, CA &nbsp;&middot;&nbsp; Irvine, CA
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactAbout;
