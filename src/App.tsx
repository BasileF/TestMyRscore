import React from 'react';
import Header from './components/Header';
import SwipeableViews from 'react-swipeable-views';
import OverallCalculator from './components/calculator/OverallCalculator';
import SingleCalculator from './components/calculator/SingleCalculator';
import Welcome from './components/Welcome';
import { Grid } from '@material-ui/core';
import Universities from './components/university/Universities';

function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="App">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <SwipeableViews index={activeTab}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className='app-grid-container'
        >
          <Grid
            item
            sm={6}
            xs={12}
            className='app-grid-item'
          >
            <Welcome />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            className='app-grid-item'
          >
            <SingleCalculator />
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className='app-grid-container'
        >
          <OverallCalculator />
        </Grid>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className='app-grid-container'
        >
          <Universities />
        </Grid>
        <h1>
          TEST
        </h1>
      </SwipeableViews>
    </div>
  );
}

export default App;