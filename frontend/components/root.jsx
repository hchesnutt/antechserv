import React from 'react';
import Splash from './splash/splash';
import NavBar from './nav_bar/nav_bar';
import About from './about/about';
import Clients from './clients/clients';
import People from './about_people/people';


const Root = () => {
  return (
    <section className='total-page'>
      <Splash/>
      <NavBar/>
      <About/>
      <Clients/>
      <People/>
    </section>
  );
};

export default Root;
