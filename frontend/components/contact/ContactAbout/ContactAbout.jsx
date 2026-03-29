import React, { Component } from 'react';

import styles from './ContactAbout.module.css';

class ContactAbout extends Component {
  render() {
    return (
      <div className={styles.contactAboutContainer}>
        <div className={styles.sectionLabel}>
          <span className={styles.labelLine}></span>
          <span className={styles.labelText}>Contact</span>
        </div>

        <h2 className={styles.heading}>
          Let's work<br/>together.
        </h2>

        <p className={styles.body}>
          We partner with municipalities, water districts, and policy organizations
          to deliver rigorous empirical analysis that drives real outcomes.
        </p>

        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Organization</span>
            <span className={styles.detailValue}>A &amp; N Technical Services Inc.</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Specialty</span>
            <span className={styles.detailValue}>Water Resources &amp; Policy Analysis</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Location</span>
            <span className={styles.detailValue}>National (US)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactAbout;
