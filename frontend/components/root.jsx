import React from 'react';
import People from './about_people/people';
import NavBar from './nav_bar/nav_bar';


const Root = () => {
  return (
    <section>
      <NavBar/>
      <People/>
    </section>
  );
};

export default Root;
