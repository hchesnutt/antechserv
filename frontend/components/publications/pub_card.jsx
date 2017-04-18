import React from 'react';

class PubCard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <a href={this.props.link_url}>
        <figure>
          <img src={this.props.image} height="180" width="320"/>
          <figcaption>
            <h4>{this.props.header}</h4>
            <p>{this.props.text}</p>
          </figcaption>
        </figure>
      </a>
    )
  }
};

export default PubCard;
