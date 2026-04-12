import React, { Component } from 'react';

import styles from './ContactForm.module.css';
import config from '../../../../config';
const { contactFormAddress } = config;


interface ContactFormState {
  subject: string;
  contents: string;
}

class ContactForm extends Component<Record<string, never>, ContactFormState> {
  constructor(props: Record<string, never>) {
    super(props)
    this.state = {
      subject: '',
      contents: '',
    }
  }

  handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ subject: e.target.value });
  };

  handleContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ contents: e.target.value });
  };

  render() {
    return (
      <section className={styles.contactForm}>
        <div className={styles.contactFormContainer}>
          <div className={styles.formField}>
            <label className={styles.formLabel}>Subject</label>
            <input
              className={styles.formItem}
              type="text"
              value={this.state.subject}
              onChange={this.handleSubject}
              maxLength={150}
              placeholder={'How can we help?'}
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel}>Message</label>
            <textarea
              className={`${styles.formItem} ${styles.formTextarea}`}
              value={this.state.contents}
              onChange={this.handleContents}
              maxLength={1000}
              placeholder={'Tell us about your project…'}
            />
          </div>

          <a
            className={styles.sendButton}
            href={`mailto:${contactFormAddress}?subject=${encodeURIComponent(this.state.subject)}&body=${encodeURIComponent(this.state.contents)}`}
          >
            Send Inquiry
          </a>
        </div>
      </section>
    );
  }
}

export default ContactForm;
