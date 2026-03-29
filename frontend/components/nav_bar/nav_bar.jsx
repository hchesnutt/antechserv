import React from 'react';
import { Sticky } from 'react-sticky';
import { Link, Events, animateScroll, scrollSpy } from 'react-scroll';

import styles from './nav_bar.module.css';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount(){
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
            <div className={styles.logoArea} onClick={this.scrollToTop}>
              <div className={styles.logoMark}>
                <div>
                  <span className={styles.logoText}>A &amp; N Technical Services</span>
                  <span className={styles.logoSub}>Water Policy &amp; Empirical Analysis</span>
                </div>
              </div>
            </div>

            <nav className={styles.navLinks}>
              <Link activeClass="navActive" className={styles.navBarText} to="about" spy={true} smooth={true} offset={-72} duration={600}>
                <h2>About</h2>
              </Link>
              <Link activeClass="navActive" className={styles.navBarText} to="pubs" spy={true} smooth={true} offset={-72} duration={600}>
                <h2>Publications</h2>
              </Link>
              <Link activeClass="navActive" className={styles.navBarText} to="people" spy={true} smooth={true} offset={-72} duration={600}>
                <h2>Team</h2>
              </Link>
              <Link activeClass="navActive" className={styles.navBarText} to="contact" spy={true} smooth={true} offset={0} duration={600}>
                <h2>Contact</h2>
              </Link>
            </nav>
          </div>
        )}
      </Sticky>
    );
  }
}

export default NavBar;
