import React, { Component } from 'react';
import styles from './ContactAbout.module.css';

class ContactAbout extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.label}>// CONTACT //</div>
        <h2 className={styles.heading}>Get In Touch</h2>
        <div className={styles.rule} />
        <p className={styles.description}>
          We work with water agencies, municipalities, and government bodies across
          the nation. Reach out to discuss your project needs.
        </p>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>LOCATION</span>
            <span className={styles.detailValue}>Encinitas, CA &amp; Los Angeles, CA</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>SPECIALTY</span>
            <span className={styles.detailValue}>Water Policy &amp; Financial Analysis</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>SCOPE</span>
            <span className={styles.detailValue}>National Consulting Firm</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactAbout;
