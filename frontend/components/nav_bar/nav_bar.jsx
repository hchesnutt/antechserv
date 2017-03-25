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
              "links to parts go here"
            </header>
          </Sticky>


    );
  }
};


export default NavBar;
