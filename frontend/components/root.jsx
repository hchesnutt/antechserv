import React from 'react';
import { StickyContainer } from 'react-sticky'

import Splash from './splash/splash';
import NavBar from './nav_bar/nav_bar';
import About from './about/about';
import Pubs from './publications/pubs';
import Contact from './contact/Contact.jsx';
import styles from './root.module.css';


const Root = () => {
  return (
    <section className={styles.root}>
      <StickyContainer>
        <NavBar/>
        <Splash/>
        <About/>
        <Pubs/>
        <Contact />
      </StickyContainer>
    </section>
  );
};

export default Root;
