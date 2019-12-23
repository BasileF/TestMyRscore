import React from 'react';
import SingleCalculator from '../calculators/single/SingleCalculator';
import Welcome from './Welcome';
import { Grid } from '@material-ui/core';

export default function Home() {
  return (
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
  )
}