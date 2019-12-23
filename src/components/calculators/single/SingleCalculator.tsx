import React from 'react';
import { Button, Grid, Paper, Fade } from '@material-ui/core';
import { BaseCalculatorProps, BaseCalculatorState } from '../../../interfaces/CalculatorInterfaces';
import CalculatorResult from '../common/CalculatorResult';
import InputField from '../../common/InputField';
import '../common/Calculator.css';

export default class SingleCalculator extends React.Component<BaseCalculatorProps, BaseCalculatorState> {
  constructor(props: BaseCalculatorProps) {
    super(props);
    this.state = {
      grade: '',
      average: '',
      deviation: '',
      strength: '75',
      rscore: undefined,
      validResult: false,
      errors: [false, false, false, false]
    };

    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.validate = this.validate.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      [e.target.name]: e.target.value,
      errors: [false, false, false, false]
    } as BaseCalculatorState)
  }

  calculate() {
    const grade = parseInt(this.state.grade);
    const average = parseInt(this.state.average);
    const deviation = parseInt(this.state.deviation);
    const strength = parseInt(this.state.strength);

    const valid = this.validate(grade, average, deviation, strength);

    if (valid) {
      this.setState({
        rscore: Math.round(((((grade! - average!) / deviation!) + (strength! - 75) / 14 + 5) * 5) * 1000) / 1000.0,
        validResult: true
      });
    }
  }

  validate(grade: number, average: number, deviation: number, strength: number) {
    const curErrors = this.state.errors.slice();

    curErrors[0] = isNaN(grade) || grade < 0 || grade > 100;
    curErrors[1] = isNaN(average) || average < 0 || average > 100;
    curErrors[2] = isNaN(deviation) || deviation < 0 || deviation > 100;
    curErrors[3] = isNaN(strength) || strength < 0 || strength > 100;

    this.setState({
      errors: curErrors
    });

    const valid = !(curErrors[0] || curErrors[1] || curErrors[2] || curErrors[3]);
    return valid;
  }

  onBack() {
    this.setState({
      grade: '',
      average: '',
      deviation: '',
      strength: '75',
      rscore: undefined,
      validResult: false,
      errors: [false, false, false, false]
    });
  }

  render() {
    return (
      <Grid
        container
        direction='column'
        alignItems='center'
      >
        <Paper
          className='calculator-single-paper'
          elevation={4}
        >
          {
            !this.state.validResult ? 
            <Fade
              in={!this.state.validResult}
              timeout={500}
            >
              <div>
                <InputField
                  label="Your Grade"
                  name="grade"
                  tooltip="Your course grade (0-100)."
                  value={this.state.grade}
                  onChange={this.handleChange}
                  error={this.state.errors[0]}
                />

                <InputField
                  label="Class Average"
                  name="average"
                  tooltip="The class average (0-100)."
                  value={this.state.average}
                  onChange={this.handleChange}
                  error={this.state.errors[1]}
                />

                <InputField
                  label="Standard Devation"
                  name="deviation"
                  tooltip="The standard deviation of the class. This can be found on your course's grade section on Omnivox."
                  value={this.state.deviation}
                  onChange={this.handleChange}
                  error={this.state.errors[2]}
                />

                <InputField
                  label="Group Strength"
                  name="strength"
                  tooltip="This is the group strength of your class. It is best to keep it at 75 if unsure."
                  value={this.state.strength}
                  onChange={this.handleChange}
                  error={this.state.errors[3]}
                />

                <Grid item>
                  <Button
                    variant='contained'
                    onClick={this.calculate}
                    className='app-button'
                    style={{ marginTop: '8px' }}
                    fullWidth
                  >
                    Calculate
                  </Button>
                </Grid>
              </div>
            </Fade>
            :
            <CalculatorResult
              validResult={this.state.validResult}
              result={this.state.rscore}
              onBack={this.onBack}
            />
          }
        </Paper>
      </Grid>
    )
  }
}