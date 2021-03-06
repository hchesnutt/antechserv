import React from 'react';
import { Sticky } from 'react-sticky';
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

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <Sticky className={styles.navBar}>
        <div className={styles.imageContainer}>
          <img src={'https://s3-us-west-1.amazonaws.com/antechserv/A%26N_logo.ai'}/>
        </div>
        <Link activeClass="navActive" className={styles.navBarText} to="about" spy={true} smooth={true} offset={-200} duration={500} onSetActive={this.handleSetActive}>
          <h2>About</h2>
        </Link>
        {/* <Link activeClass="navActive" className={styles.navBarText} to="clients" spy={true} smooth={true} offset={-200} duration={500}>
          <h2>Clients</h2>
        </Link> */}
        <Link activeClass="navActive" className={styles.navBarText} to="pubs" spy={true} smooth={true} offset={-200} duration={500}>
          <h2>Publications</h2>
        </Link>
        {/* <Link activeClass="navActive" className={styles.navBarText} to="people" spy={true} smooth={true} offset={-200} duration={500}>
          <h2>People</h2>
        </Link> */}
        <Link activeClass="navActive" className={styles.navBarText} to="contact" spy={true} smooth={true} offset={0} duration={500}>
          <h2>Contact Us</h2>
        </Link>
      </Sticky>
    );
  }
};


export default NavBar;
