import React from 'react';
import { Link, Events, animateScroll, scrollSpy } from 'react-scroll';

import styles from './nav_bar.module.css';

interface NavBarState {
  menuOpen: boolean;
}

class NavBar extends React.Component<Record<string, never>, NavBarState> {
  constructor(props: Record<string, never>){
    super(props);
    this.state = { menuOpen: false };
    this.scrollToTop = this.scrollToTop.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState(s => ({ menuOpen: !s.menuOpen }));
  }

  closeMenu() {
    this.setState({ menuOpen: false });
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
    const { menuOpen } = this.state;
    return (
      <div className={styles.navBar}>
        <div className={styles.logoArea} onClick={this.scrollToTop}>
          <div className={styles.logoMark}>
            <div>
              <span className={styles.logoText}>A &amp; N Technical Services</span>
              <span className={styles.logoSub}>Water Policy &amp; Empirical Analysis</span>
            </div>
          </div>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={this.toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <Link activeClass="navActive" className={styles.navBarText} to="about" spy={true} smooth={true} offset={-72} duration={600} onClick={this.closeMenu}>
            <h2>About</h2>
          </Link>
          <Link activeClass="navActive" className={styles.navBarText} to="pubs" spy={true} smooth={true} offset={-72} duration={600} onClick={this.closeMenu}>
            <h2>Publications</h2>
          </Link>
          <Link activeClass="navActive" className={styles.navBarText} to="people" spy={true} smooth={true} offset={-72} duration={600} onClick={this.closeMenu}>
            <h2>Team</h2>
          </Link>
          <Link activeClass="navActive" className={styles.navBarText} to="contact" spy={true} smooth={true} offset={0} duration={600} onClick={this.closeMenu}>
            <h2>Contact</h2>
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
