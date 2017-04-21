import React from 'react';
import { Element } from 'react-scroll';

class About extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Element name='about' className='about'>
        <p1>
          Welcome to A & N Technical Services Inc. We are a national consulting firm specializing in empirical policy analysis. We provide state-of-the-art financial expertise applied to water resources and water efficiency programs.
        </p1>
      </Element>
    )
  }
}

export default About;
