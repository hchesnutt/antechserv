import React from 'react';
import { Element } from 'react-scroll';
import styles from './about.module.css';

const About = () => {
  return (
    <Element name='about'>
      <section className={styles.about}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>01</span>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionRule}></span>
            <span className={styles.sectionLabelText}>About the Firm</span>
          </div>
        </div>

        <div className={styles.aboutBody}>
          <div className={styles.aboutLeft}>
            <h2 className={styles.aboutHeadline}>
              National expertise in<br />
              <em>empirical water policy</em>
            </h2>

            <blockquote className={styles.pullQuote}>
              We provide state-of-the-art financial expertise applied to
              water resources and water efficiency programs—serving
              municipalities and agencies across the nation.
            </blockquote>
          </div>

          <div className={styles.aboutRight}>
            <p className={styles.aboutText}>
              A &amp; N Technical Services Inc. is a national consulting firm
              specializing in empirical policy analysis. Founded on the conviction
              that sound data transforms water governance, we bring rigorous
              quantitative methods to the complex challenges facing water utilities,
              districts, and state agencies.
            </p>

            <p className={styles.aboutText}>
              Our team combines deep expertise in financial modeling, rate design,
              and demand forecasting with hands-on experience working alongside
              the regulatory and legislative bodies that shape water policy.
            </p>

            <div className={styles.specs}>
              <div className={styles.spec}>
                <span className={styles.specNumber}>20+</span>
                <span className={styles.specLabel}>Years of practice</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specNumber}>50+</span>
                <span className={styles.specLabel}>Agencies served</span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specNumber}>National</span>
                <span className={styles.specLabel}>Reach &amp; scope</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
