import React from 'react';
import Splash from './splash/splash';
import NavBar from './nav_bar/nav_bar';
import About from './about/about';
import Clients from './clients/clients';
import People from './about_people/people';
import Pubs from './publications/pubs';
import {StickyContainer} from 'react-sticky'


const Root = () => {
  return (
    <section className='total-page'>
      <StickyContainer>
        <Splash/>
        <NavBar/>
        <About/>
        <Clients/>
        <Pubs/>
        <People/>
      </StickyContainer>
    </section>
  );
};

export default Root;
