import React from 'react';
import { StickyContainer } from 'react-sticky';
import NavBar from './nav_bar/nav_bar';
import Splash from './splash/splash';
import About from './about/about';
import Pubs from './publications/pubs';
import People from './about_people/people';
import Contact from './contact/Contact.jsx';
import styles from './root.module.css';

const Root = () => (
  <section className={styles.root}>
    <StickyContainer>
      <NavBar/>
      <Splash/>
      <About/>
      <Pubs/>
      <People/>
      <Contact />
    </StickyContainer>
  </section>
);

export default Root;
