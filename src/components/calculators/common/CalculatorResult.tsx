import React from 'react';
import { Fade, Grid, Typography, Button } from '@material-ui/core';
import { CalculatorResultProps } from '../../../interfaces/CalculatorInterfaces';

export default function CalculatorResult(props: CalculatorResultProps) {
  return (
    <Fade
      in={props.validResult}
      timeout={500}
    >
      <Grid
        item
        xs={12}
        className='app-text calculator-common-result'
      >
        <Typography variant='body1'>Your RScore is:</Typography>
        <br />
        <Typography variant='h1'>{props.result}</Typography>
        <br />
        <hr />
        <Button
          className='app-button'
          fullWidth
          onClick={props.onBack}
        >
          Back
        </Button>
      </Grid>
    </Fade>
  )
}