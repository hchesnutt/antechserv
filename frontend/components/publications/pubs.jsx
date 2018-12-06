import React from 'react';
import PubCard from './pub_card';
import Publications from './publications';
import { Element } from 'react-scroll';

import styles from './pubs.css';

class Pubs extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Element name='pubs' className={styles.pubs}>
        <ul className={styles.pubsList}>
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
