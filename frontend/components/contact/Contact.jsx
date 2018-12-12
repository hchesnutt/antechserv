import React, { Component } from 'react';
import { Element } from 'react-scroll';

import styles from './Contact.css';
import ContactAbout from './ContactAbout/ContactAbout';
import ContactForm from './ContactForm/ContactForm';

class Contact extends Component {
  render() { 
    return (
      <Element name={'contact'}>
        <div className={styles.contactContainer}>
          <ContactAbout />
          <ContactForm />
        </div>
      </Element>
    );
  }
}
 
export default Contact;