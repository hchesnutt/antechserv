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
      <Element name='clients' className={styles.clients}>
        <div className={styles.clientsContainer}>
          {clientImages.map(image => (
            <img src={image} />
          ))}
        </div>
      </Element>
    )
  }
}

export default Clients;
