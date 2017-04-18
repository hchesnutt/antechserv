import React from 'react';
import { Sticky } from 'react-sticky';


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Sticky className='nav-bar'>
        <header className='nav-bar-text'>
          "This is the Navigation Bar. Links to sections below. To be done/Progress Pending."
        </header>
      </Sticky>
    );
  }
};


export default NavBar;
