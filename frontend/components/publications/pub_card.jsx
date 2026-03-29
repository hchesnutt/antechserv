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
          borderRadius: '4px',
          border: '1px solid rgba(45, 212, 191, 0.15)',
          background: '#1e293b',
          cursor: 'pointer',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.5)';
            e.currentTarget.style.boxShadow = '0 0 32px rgba(45, 212, 191, 0.15)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(45, 212, 191, 0.15)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* Publication type label */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 3,
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent-teal)',
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '4px 10px',
            borderRadius: '2px',
            border: '1px solid rgba(45, 212, 191, 0.2)',
          }}>
            Publication
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
            background: 'linear-gradient(to bottom, transparent, #1e293b)',
            pointerEvents: 'none',
          }}/>

          <figcaption style={{
            padding: '20px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <h4 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: 1.4,
              color: 'var(--text-primary)',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {this.props.header}
            </h4>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {this.props.text}
            </p>
          </figcaption>
        </figure>
      </a>
    )
  }
};

export default PubCard;
