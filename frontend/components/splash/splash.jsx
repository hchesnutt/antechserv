import React from 'react';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className='splash'>
          <div className='splash-logo-area'>
            <img src={'./assets/an_logo/A&N_logotype_med.png'} className='splash-logo'/>
          </div>
        </div>
    );
  };

}

export default Splash;
