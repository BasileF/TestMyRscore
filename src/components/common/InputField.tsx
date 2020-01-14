import React from 'react';
import { Grid, TextField, Tooltip } from '@material-ui/core';
import HelpOutlinedIcon from '@material-ui/icons/Help';
import { InputFieldProps } from '../../interfaces/CommonInterfaces';

export default function InputField(props: InputFieldProps) {
  return (
    <Grid item>
      <Grid container spacing={1} alignItems='flex-end'>
        <Grid item style={props.tooltip ? { width: 'calc(100% - 32px)' } : {width: '100%'}}>
          <TextField
            label={props.label}
            error={props.error}
            variant='outlined'
            type='number'
            margin='dense'
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            inputProps={{ step: 0.01, autoComplete: 'off' }}
            style={{ width: '100%' }}
          />
        </Grid>
        {
          props.tooltip &&
          <Grid item>
            <Tooltip title={props.tooltip} disableFocusListener placement='right'>
              <HelpOutlinedIcon style={{ verticalAlign: 'super', color: 'black' }} />
            </Tooltip>
          </Grid>
        }
      </Grid>
    </Grid>
  )
}