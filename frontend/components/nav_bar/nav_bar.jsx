import React from 'react';
import { Sticky } from 'react-sticky';
import { Link, Events, animateScroll, scrollSpy } from 'react-scroll';

import styles from './nav_bar.module.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    scrollSpy.update();
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <Sticky>
        {({ style }) => (
          <div style={style} className={styles.navBar}>
            <div className={styles.imageContainer}>
              <img
                src="https://s3-us-west-1.amazonaws.com/antechserv/A%26N_logotype_med.png"
                alt="A&N Technical Services"
              />
            </div>
            <div className={styles.navLinks}>
              <Link
                activeClass="navActive"
                className={styles.navBarText}
                to="about"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
              >
                About
              </Link>
              <Link
                activeClass="navActive"
                className={styles.navBarText}
                to="pubs"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
              >
                Publications
              </Link>
              <Link
                activeClass="navActive"
                className={styles.navBarText}
                to="people"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
              >
                Team
              </Link>
              <Link
                activeClass="navActive"
                className={styles.navBarText}
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </Sticky>
    );
  }
}

export default NavBar;
