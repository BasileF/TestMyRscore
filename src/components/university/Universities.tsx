import React from 'react';
import { universities } from '../../interfaces/UniversityInterfaces';
import UniversityPreview from './UniversityPreview';
import { Grid } from '@material-ui/core';

export default function Universities() {
  return (
    <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          className='app-grid-container'
        >
      {
        universities.map((uni, index) => 
          <UniversityPreview 
            university={uni}
            key={index}
          />
        )
      }
    </Grid>
  )
}