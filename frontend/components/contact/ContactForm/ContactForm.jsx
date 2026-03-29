import React, { Component } from 'react';

import styles from './ContactForm.css';
import config from '../../../../config';
const { contactFormAddress } = config;


class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: '',
      contents: '',
    }
  }

  handleSubject = (e) => {
    this.setState({ subject: e.target.value });
  };

  handleContents = (e) => {
    this.setState({ contents: e.target.value });
  };

  render() {
    return (
      <section className={styles.contactForm}>
        <div className={styles.contactFormContainer}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Subject</label>
            <input
              className={styles.formInput}
              type="text"
              value={this.state.subject}
              onChange={this.handleSubject}
              maxLength={150}
              placeholder="How can we help?"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Message</label>
            <textarea
              className={styles.formTextarea}
              value={this.state.contents}
              onChange={this.handleContents}
              maxLength={1000}
              placeholder="Tell us about your project..."
            />
          </div>
          <a
            className={styles.sendButton}
            href={`mailto:${contactFormAddress}?subject=${this.state.subject}&body=${this.state.contents.replace(/\n/g, '%0D%0A')}`}
          >
            Send Message
          </a>
        </div>
      </section>
    );
  }
}

export default ContactForm;
