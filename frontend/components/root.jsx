import React from 'react';
import People from './about_people/people';
import Splash from './splash/splash';
import NavBar from './nav_bar/nav_bar';
import About from './about/about';


const Root = () => {
  return (
    <section className='total-page'>
      <Splash/>
      <NavBar/>
      <About/>
      <People/>
    </section>
  );
};

export default Root;
