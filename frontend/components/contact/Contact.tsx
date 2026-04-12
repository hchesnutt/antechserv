import React, { Component } from 'react';
import { Element } from 'react-scroll';

import styles from './Contact.module.css';
import ContactAbout from './ContactAbout/ContactAbout';
import ContactForm from './ContactForm/ContactForm';

class Contact extends Component {
  render() {
    return (
      <Element name={'contact'}>
        <div className={styles.contactContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04</span>
            <div className={styles.sectionLabel}>
              <span className={styles.sectionRule}></span>
              <span className={styles.sectionLabelText}>Get in Touch</span>
            </div>
          </div>

          <div className={styles.contactBody}>
            <ContactAbout />
            <ContactForm />
          </div>
        </div>
      </Element>
    );
  }
}

export default Contact;
