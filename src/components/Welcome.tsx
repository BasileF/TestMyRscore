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
          style={{textAlign: 'justify'}}
        >
          We take pride in helping CEGEP students evaluate their academic standing by providing two simple tools:
          <ul style={{ textAlign: 'left' }}>
            <li>RScore Calculator (Single/Overall)</li>
            <li>University Requirements Calculator</li>
          </ul>
        </Typography>
      </div>
    </Grid>
  )
}