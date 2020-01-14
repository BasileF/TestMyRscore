import React from 'react';
import { Paper, Grid, Typography, Checkbox, Button, FormControlLabel } from '@material-ui/core';
import { EligibilityProps, EligibilityState } from '../../interfaces/UniversityInterfaces';
import InputField from '../common/InputField';
import BackIcon from '@material-ui/icons/ArrowBack';

export default class Eligibility extends React.Component<EligibilityProps, EligibilityState> {
  constructor(props: EligibilityProps) {
    super(props);

    this.state = {
      rScore: '',
      prerequisites: {
        cal1: false,
        cal2: false,
        linear: false,
        mechanics: false,
        waves: false,
        eAndM: false,
        genChem: false,
        chemSol: false,
        bio1: false,
        bio2: false,
        organic: false
      },
      programs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePrereq = this.handlePrereq.bind(this);
    this.prereqCheckboxes = this.prereqCheckboxes.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      [e.target.name]: e.target.value
    } as EligibilityState);
  }

  handlePrereq(e: any) {
    const prereqs = this.state.prerequisites as any;
    prereqs[e.target.value] = e.target.checked;

    this.setState({
      prerequisites: prereqs
    });
  }

  toTitle(prereq: string) {
    switch (prereq) {
      case 'cal1':
        return 'Calculus I';
      case 'cal2':
        return 'Calculus II';
      case 'linear':
        return 'Linear Algebra';
      case 'mechanics':
        return 'Mechanics';
      case 'waves':
        return 'Waves & Optics';
      case 'eAndM':
        return 'Electricity & Magnetism';
      case 'genChem':
        return 'General Chemistry';
      case 'chemSol':
        return 'Chemistry of Solutions';
      case 'bio1':
        return 'General Biology I';
      case 'bio2':
        return 'General Biology II';
      case 'organic':
        return 'Organic Chemistry';
    }
  }

  prereqCheckboxes() {
    const prereqs = this.state.prerequisites as any;
    let elements = [];

    for (const prereq in prereqs) {
      elements.push(
        <Grid item sm={4} xs={12}>
          <FormControlLabel
            label={this.toTitle(prereq)}
            control={<Checkbox checked={prereqs[prereq]} onChange={this.handlePrereq} value={prereq} color='primary' />}
          /></Grid>
      );
    }

    return elements;
  }

  render() {
    const uni = this.props.university;
    return (
      <Grid
        item
        style={{
          height: 'calc(100vh - 68px)',
          width: '100%',
          padding: '0px 10px 0px 10px'
        }}
      >
        <Paper
          elevation={4}
          style={{ height: 'calc(100% - 20px)', padding: '10px' }}
        >
          <BackIcon className='eligibility-back' onClick={this.props.close} />
          <Grid
            container
            direction='column'
            alignItems='center'
            spacing={1}
          >
            <Grid
              item
            >
              <Typography variant='h5'>{uni.name}</Typography>
            </Grid>
            <InputField
              label='Global RScore'
              name='rScore'
              value={this.state.rScore}
              error={false}
              onChange={this.handleChange}
            />
            <Grid
              item
            >
              <Grid
                container
              >
              {this.prereqCheckboxes()}
              </Grid>
            </Grid>
            <Grid
              item
            >
              <Button
                className='app-button'
                variant='contained'
                onClick={this.prereqCheckboxes}
              >
                Show Programs
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}