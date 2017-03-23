import React from 'react';
import People from './about_people/people';
import Splash from './splash/splash';
import NavBar from './nav_bar/nav_bar';


const Root = () => {
  return (
    <section>
      <Splash/>
      <NavBar/>
      <People/>
    </section>
  );
};

export default Root;
