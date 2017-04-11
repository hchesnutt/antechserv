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
          <div className='splash-logo-area'>
            <img src={'./assets/an_logo_medium.png'} className='splash-logo'/>
          </div>
          <div className='splash-particles'>
            <Particles params={Params}/>
          </div>
        </div>
    );
  };

}

export default Splash;
