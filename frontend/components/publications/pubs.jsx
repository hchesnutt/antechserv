import React from 'react';
import PubCard from './pub_card';
import Publications from './publications';

class Pubs extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <section className='pubs'>
        <ul className='pubs-list'>
          {Publications.map((pubSingle, i) => (
            <li key={i}>
              <PubCard {...pubSingle}/>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Pubs;
