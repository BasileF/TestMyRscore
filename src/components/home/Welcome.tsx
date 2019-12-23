import React from 'react';
import { Typography, Grid } from '@material-ui/core';

export default function Welcome() {
  return (
    <Grid
      container
      justify='center'
    >
      <div
        className='app-text'
        style={{
          width: '90%',
          textAlign: 'center'
        }}
      >
        <Typography
          variant='h5'
        >
          Welcome to TestMyRScore
        </Typography>
        <hr />
        <Typography
          variant='body1'
          style={{ textAlign: 'justify' }}
        >
          We take pride in helping CEGEP students evaluate their academic standing by providing two simple tools:
        </Typography>
        <ul style={{ textAlign: 'left' }}>
          <li><Typography variant='body1'>RScore Calculator (Single/Overall)</Typography></li>
          <li><Typography variant='body1'>University Requirements Calculator</Typography></li>
        </ul>
      </div>
    </Grid>
  )
}