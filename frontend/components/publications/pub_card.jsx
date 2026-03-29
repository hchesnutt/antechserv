import React from 'react';

class PubCard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <a href={this.props.link_url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', display: 'block', height: '100%'}}>
        <figure style={{
          position: 'relative',
          height: '420px',
          overflow: 'hidden',
          borderRadius: '3px',
          border: '1px solid rgba(44, 31, 20, 0.14)',
          background: '#fff9f2',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(184, 92, 56, 0.45)';
            e.currentTarget.style.boxShadow = '0 4px 28px rgba(184, 92, 56, 0.12)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(44, 31, 20, 0.14)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* "Report" badge — top right, terracotta */}
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 3,
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#fff9f2',
            background: '#b85c38',
            padding: '4px 10px',
            borderRadius: '2px',
          }}>
            Report
          </div>

          <img
            src={this.props.image}
            alt={this.props.header}
            style={{
              width: '100%',
              height: '240px',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
              transition: 'transform 500ms ease',
            }}
          />

          {/* Gradient overlay at image bottom */}
          <div style={{
            position: 'absolute',
            top: '180px',
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(to bottom, transparent, #fff9f2)',
            pointerEvents: 'none',
          }}/>

          <figcaption style={{
            padding: '20px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}>
            <h4 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: 1.35,
              color: '#2c1f14',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {this.props.header}
            </h4>
            <p style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '12px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: '#9a7e6a',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {this.props.text}
            </p>
            <span style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: '#4a6741',
              marginTop: '2px',
            }}>
              Read Report →
            </span>
          </figcaption>
        </figure>
      </a>
    )
  }
};

export default PubCard;
