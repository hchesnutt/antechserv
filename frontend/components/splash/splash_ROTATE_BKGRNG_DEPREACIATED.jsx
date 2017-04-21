import React from 'react';

class Splash extends React.Component {
  constructor(props){
    super(props);
    console.log(this.state);
    this.state = {
      bgId: 0
    };
    this.imgs = [
      './assets/splash/scream_nature.jpg',
      './assets/splash/splash01.png',
      './assets/splash/splash02.jpg'
    ];
  }

  render(){
    let newbgId = (this.state.bgId === 2) ? 0 : this.state.bgId + 1;
    setTimeout(function () {
      this.setState({bgId: newbgId});
    }.bind(this), 7000);
    let divStyle = {
      backgroundImage: 'url(' + this.imgs[newbgId] + ')'
    };
    console.log(divStyle);
    return (
        <div className='splash' style={divStyle}>
          <div className='splash-logo-area'>
            <img src={'./assets/an_logo_medium.png'} className='splash-logo'/>
          </div>
        </div>
    );
  };

}

export default Splash;
