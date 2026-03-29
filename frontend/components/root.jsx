import React from 'react';

import NavBar from './nav_bar/nav_bar';
import Splash from './splash/splash';
import About from './about/about';
import People from './about_people/people';
import Pubs from './publications/pubs';
import Contact from './contact/Contact.jsx';
import styles from './root.css';


const Root = () => {
  return (
    <section className={styles.root}>
      <NavBar/>
      <Splash/>
      <About/>
      <Pubs/>
      <People/>
      <Contact />
    </section>
  );
};

export default Root;
