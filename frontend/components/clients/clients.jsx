import React from 'react';
import { Element } from 'react-scroll';


class Clients extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Element name='clients' className='clients'>
        <p1>
          client logos go here  ... Alec can you look up Water Research Foundation, US EPA, LADWP, SDCWA, Metropolitan Water District,
        </p1>
      </Element>
    )
  }
}

export default Clients;
