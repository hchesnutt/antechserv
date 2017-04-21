import React from 'react';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className='splash'>
          <div className='splash-logo-area'>
            <img src={'./assets/an_logo/AN_LOGO_Name_large.JPG'} className='splash-logo'/>
          </div>
        </div>
    );
  };

}

export default Splash;
