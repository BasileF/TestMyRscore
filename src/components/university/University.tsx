import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { UniversityProps } from '../../interfaces/UniversityInterfaces';
import './University.css';

export default function University(props: UniversityProps) {
  const university = props.university;
  return (
    <Grid
      item
      className='university-grid'
    >
      <Grid
        container
        justify='center'
        spacing={2}
      >
        <Paper 
          className='university-paper app-clickable'
          elevation={4}
          onClick={() => props.onClick(university)}
        >
          {
            university.image === '' ?
              <Grid
                container
                justify='center'
                alignItems='center'
                alignContent='center'
                style={{height: '100%', padding: '10px'}}
              >
                <Typography
                  variant='button'
                >
                  <strong>{university.name}</strong>
                </Typography>
              </Grid>
              :
              <img src={university.image} alt={university.name + ' Logo'}/>
          }
        </Paper>
      </Grid>
    </Grid>
  );
}