import React from 'react';
import { StickyContainer } from 'react-sticky'

// import Splash from './splash/splash';
import NavBar from './nav_bar/nav_bar';
import About from './about/about';
// import Clients from './clients/clients';
import People from './about_people/people';
import Pubs from './publications/pubs';
import Contact from './contact/Contact.jsx';
import styles from './root.css';


const Root = () => {
  return (
    <section className={styles.root}>
      <StickyContainer>
        <NavBar/>
        {/* <Splash/> */}
        <About/>
        {/* <Clients/> */}
        <Pubs/>
        {/* <People/> */}
        <Contact />
      </StickyContainer>
    </section>
  );
};

export default Root;
