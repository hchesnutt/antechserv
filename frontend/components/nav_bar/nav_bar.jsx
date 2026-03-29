import React from 'react';
import { Link, Events, animateScroll, scrollSpy } from 'react-scroll';

import styles from './nav_bar.css';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount(){
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

  render() {
    return (
      <header className={styles.navBar}>
        <div className={styles.logoArea} onClick={this.scrollToTop}>
          <img
            src={'https://s3-us-west-1.amazonaws.com/antechserv/A%26N_logotype_med.png'}
            className={styles.logoImg}
          />
        </div>
        <nav className={styles.navLinks}>
          <Link activeClass={styles.navActive} className={styles.navBarText} to="about" spy={true} smooth={true} offset={-200} duration={500}>
            About
          </Link>
          <Link activeClass={styles.navActive} className={styles.navBarText} to="pubs" spy={true} smooth={true} offset={-200} duration={500}>
            Publications
          </Link>
          <Link activeClass={styles.navActive} className={styles.navBarText} to="people" spy={true} smooth={true} offset={-200} duration={500}>
            Team
          </Link>
          <Link activeClass={styles.navActive} className={styles.navBarText} to="contact" spy={true} smooth={true} offset={0} duration={500}>
            Contact
          </Link>
        </nav>
      </header>
    );
  }
}

export default NavBar;
