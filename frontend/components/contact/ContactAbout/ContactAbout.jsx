import React, { Component } from 'react';

import styles from './ContactAbout.css';

class ContactAbout extends Component {
  render() {
    return (
      <div className={styles.contactAboutContainer}>
        <p className={styles.sectionLabel}>Get In Touch</p>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <div className={styles.sectionDivider}></div>
        <p className={styles.description}>
          Interested in working with us? We&rsquo;d love to hear from you.
          Send us a message and we&rsquo;ll be in touch shortly.
        </p>
        <div className={styles.contactDetails}>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}>&#9737;</span>
            <div>
              <p className={styles.detailLabel}>Location</p>
              <p className={styles.detailValue}>Encinitas, CA &amp; Los Angeles, CA</p>
            </div>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}>&#9742;</span>
            <div>
              <p className={styles.detailLabel}>Phone</p>
              <p className={styles.detailValue}>(760) 942-5149</p>
            </div>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailIcon}>&#9993;</span>
            <div>
              <p className={styles.detailLabel}>Email</p>
              <p className={styles.detailValue}>info@antechserv.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactAbout;
