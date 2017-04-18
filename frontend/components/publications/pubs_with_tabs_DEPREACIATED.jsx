import React from 'react';
import { Tabs, Tab } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slideOdd: {
    background: '#6AC0FF',
  },
  slideEven: {
    background: '#B3DC4A',
  },
  tabStyle: {
    wordSpacing: 'default',
    overflowWrap: 'break-word',
  }
};

class Pubs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    };
  }

  handleChangeTabs = (value) => () => {
    this.setState({
      index: value,
    });
  }

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  }


  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <section>
          <Tabs value={this.state.index}>
            <Tab style={styles.tabStyle} label="Water Efficiency" value={0} onClick={this.handleChangeTabs(0)} />
            <Tab label="Water Treatment" value={1} onClick={this.handleChangeTabs(1)} />
            <Tab label="Economics" value={2} onClick={this.handleChangeTabs(2)} />
            <Tab label="Rates" value={3} onClick={this.handleChangeTabs(3)} />
            <Tab label="Water Demand" value={4} onClick={this.handleChangeTabs(4)} />
          </Tabs>
          <Tabs value={this.state.index}>
            <Tab label="Water Supply" value={5} onClick={this.handleChangeTabs(5)} />
            <Tab label="Evaluation" value={6} onClick={this.handleChangeTabs(6)} />
            <Tab label="Modeling Analysis" value={7} onClick={this.handleChangeTabs(7)} />
            <Tab label="Planning" value={8} onClick={this.handleChangeTabs(8)} />
          </Tabs>
          <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
            <div title="Water Use Efficiency" style={Object.assign({}, styles.slide, styles.slideEven)}>
              Water Use Efficiency
            </div>
            <div title="Water Recycling, Desalination, Advanced Treatment" style={Object.assign({}, styles.slide, styles.slideOdd)}>
              Water Recycling, Desalination, Advanced Treatment
            </div>
            <div title="Economics" style={Object.assign({}, styles.slide, styles.slideEven)}>
              Economics
            </div>
            <div title="Rates and Charges, Financing" style={Object.assign({}, styles.slide, styles.slideOdd)}>
              Rates and Charges, Financing
            </div>
            <div title="Water Demand" style={Object.assign({}, styles.slide, styles.slideEven)}>
              Water Demand
            </div>
            <div title="Water Supply" style={Object.assign({}, styles.slide, styles.slideOdd)}>
              Water Supply
            </div>
            <div title="Evaluation" style={Object.assign({}, styles.slide, styles.slideEven)}>
              Evaluation
            </div>
            <div title="Modeling and Systems Analysis" style={Object.assign({}, styles.slide, styles.slideOdd)}>
              Modeling and Systems Analysis
            </div>
            <div title="Planning" style={Object.assign({}, styles.slide, styles.slideEven)}>
              Planning
            </div>
          </SwipeableViews>
        </section>
      </MuiThemeProvider>
    );
  }
}

export default Pubs;
