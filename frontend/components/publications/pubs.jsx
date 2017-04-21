import React from 'react';
import PubCard from './pub_card';
import Publications from './publications';
import { Element } from 'react-scroll';

class Pubs extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <Element name='pubs' className='pubs'>
        <ul className='pubs-list'>
          {Publications.map((pubSingle, i) => (
            <li key={i}>
              <PubCard {...pubSingle}/>
            </li>
          ))}
        </ul>
      </Element>
    );
  }
}

export default Pubs;
