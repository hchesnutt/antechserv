import React from 'react';
import Particles from 'react-particles-js';
import Params from './params.json';

class Splash extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(Params)
    return (
        <div className='splash'>
          <img src={'./assets/an_logo_medium.png'} className='splash-logo'/>
          <Particles params={Params}/>
        </div>
    );
  };

}

export default Splash;
