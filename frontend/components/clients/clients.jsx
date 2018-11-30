import React from 'react';
import { Element } from 'react-scroll';

import styles from './clients.css';
import clientImages from '../../../assets/clients';


class Clients extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Element name='clients' className='clients'>
        {clientImages.map(image => (
          <img src={image} style={styles} />
        ))}
      </Element>
    )
  }
}

export default Clients;
