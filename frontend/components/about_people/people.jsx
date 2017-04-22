import React from 'react';
import peeps from './peeps';
import Particles from 'react-particles-js';
import Params from './params.json';
import { CardStack, Card } from 'react-cardstack';
import { Element } from 'react-scroll';


class People extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
        <Element name='people' className='people-box'>
          <section className='fill'>
            <h4 className='people-quote'>Nothing is so difficult as not deceiving oneself. - Ludwig Wittgenstein </h4>
            <Particles params={Params} className='particles'/>
          </section>
          <section className='card-stack'>
            <CardStack
              height={400}
              width={450}
              background="#f8f8f8"
              hoverOffset={25}>

              {peeps.map((person, i) =>
                <Card
                  key={i}
                  background={person.background}>
                  <TeamMemberCard {...person}/>
                </Card>
              )}
            </CardStack>
          </section>
        </Element>
    )
  }
};

const TeamMemberCard = (props) => (
  <section style={{ position: 'absolute', top: 0 }} onClick={props.onClick}>
    <header style={styles.cardHeader} className='card-header-details'>
      <ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
      <section>
        <h1 style={styles.headerName}>{props.name}</h1>
        <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
      </section>
    </header>

    <section style={{color: '#000000'}}>
      <section style={{display: 'flex'}}>
        <DetailsRow
          icon='ion-ios-telephone-outline'
          title={props.mobileNo}
          />

        <DetailsRow
          icon='ion-ios-location-outline'
          title={props.location}
          />
      </section>

      <DetailsRow
        icon='icon ion-ios-paper-outline'
        title='About'
        summary={props.role}
        />
    </section>
  </section>
);

const ProfilePicture = ({ imgSrc, borderColor }) => (
	<img
		style={{
			width: '60px',
			height: '60px',
			borderRadius: '100%',
			border: `3px solid ${borderColor}`,
		}}
		src={imgSrc}
	/>
);

const DetailsRow = ({ icon, title, summary }) => {
	const renderSummary = () => {
		if (summary) return (
			<p style={{ fontWeight: 300, lineHeight: 1.45}}>
				{summary}
			</p>
		);
		return null;
	};

	return (
		<section style={styles.detailsRow.row}>
			<span
			className={`icon ${icon}`}
			style={{...styles.detailsRow.icon, alignSelf: 'flex-start' }}
			/>
			<section style={{ width: '80%' }}>
				<h2 style={styles.detailsRow.title}>
					{title}
				</h2>
				{renderSummary()}
			</section>
		</section>
	);
};

const styles = {
	cardHeader: {
		display: 'flex',
		height: '125px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		color: '#000000',
	},
	headerName: {
		margin: 0,
		fontWeight: 500,
		fontSize: '25px',
		textAlign: 'right'
	},
	headerTitle: {
		margin: '4px 0 0',
		fontWeight: 300,
		fontSize: '17px',
		opacity: 0.8,
		textAlign: 'right'
	},
	detailsRow: {
		row: {
			width: '100%',
			padding: '0 20px',
			display: 'flex',
			alignItems: 'center',
			margin: '10px 0',
		},
		icon: {
			display: 'block',
			width: '25px',
			height: '30px',
			margin: '0 20px 0 0',
			borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
			textAlign: 'center',
			fontSize: '22px',
		},
		title: {
			fontWeight: 500,
			fontSize: '20px',
			margin: 0,
			fontStyle: 'italic',
		},
	},
};

export default People;
