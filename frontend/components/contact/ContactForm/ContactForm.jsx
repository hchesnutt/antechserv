import React, { Component } from 'react';

import styles from './ContactForm.css';
import { contactFormAddress } from '../../../../config';


class contactForm extends Component {
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
          <input
            className={styles.formItem}
            type="email"
            value={this.state.subject}
            onChange={this.handleSubject}
            maxLength={150}
            placeholder={'subject'}
            />
          <textarea
            className={styles.formItem}
            value={this.state.contents}
            onChange={this.handleContents}
            maxLength={1000}
            placeholder={'body'}
            />
          <a 
            className={styles.formItem}
            href={`mailto:${contactFormAddress}?subject=${this.state.subject}&body=${this.state.contents.replace(/\n/g, '%0D%0A')}`}
          >
            Send
          </a>
        </div>
      </section>
    );
  }
}

export default contactForm;