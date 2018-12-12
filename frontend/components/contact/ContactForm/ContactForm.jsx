import React, { Component } from 'react';
import MailForm from 'react-mail-form';

import styles from './ContactForm.css';

class contactForm extends Component {
  render() {
    return (
      <div className={styles.contactFormContainer}>
        <MailForm to={'t.henry.chesnutt@gmail.com'}/>
      </div>
    );
  }
}

export default contactForm;