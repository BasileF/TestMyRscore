import React from 'react';
import { universities, UniversitiesState, UniversityInfo } from '../../interfaces/UniversityInterfaces';
import University from './University';
import { Grid } from '@material-ui/core';
import Eligibility from './Eligibility';

interface NoProps {}

export default class Universities extends React.Component<NoProps, UniversitiesState> {
  constructor(props: NoProps) {
    super(props);

    this.state = {
      eligibilityVisible: false,
      university: {}
    };

    this.showEligibility = this.showEligibility.bind(this);
    this.closeEligibility = this.closeEligibility.bind(this);
  }

  showEligibility(university: UniversityInfo) {
    this.setState({
      eligibilityVisible: true,
      university: university
    });
  }

  closeEligibility() {
    this.setState({
      eligibilityVisible: false,
      university: {}
    });
  }

  render() {
    return (
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        className='app-grid-container'
      >
        {
          this.state.eligibilityVisible ?
          <Eligibility 
            university={this.state.university as UniversityInfo}
            close={this.closeEligibility}
          />
          :
          universities.map((uni, index) =>
            <University
              university={uni}
              onClick={this.showEligibility}
              key={index}
            />
          )
        }
      </Grid>
    );
  }
}