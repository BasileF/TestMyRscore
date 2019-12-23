import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function Contact() {
  return (
    <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          className='app-grid-container'
        >
      <Grid item className='app-text app-grid-item' style={{textAlign: 'center', width: 'fit-content'}}>
        <Typography variant='h5'>CONTACT US</Typography>
        <Typography variant='body2'>We would love to help!</Typography>
        <hr/>
        <Typography variant='body1'>
          For any additional information, <br/> complaints or suggestions, you <br/> can reach us here: <br/> <a href='mailto:TestMyRscore@gmail.com'>TestMyRscore@gmail.com</a>
        </Typography>
      </Grid>
    </Grid>
  )
}