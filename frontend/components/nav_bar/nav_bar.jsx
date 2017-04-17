import React from 'react';
import { Sticky } from 'react-sticky';


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (

          <Sticky>
            <header className='nav-bar'>
              "This is the Navigation Bar. Links to sections below. To be done/Progress Pending."
            </header>
          </Sticky>


    );
  }
};


export default NavBar;
