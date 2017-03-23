import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <StickyContainer>

          <Sticky>
            <header className='nav-bar'>
              "links to parts go here"
            </header>
          </Sticky>

      </StickyContainer>

    );
  }
};


export default NavBar;
