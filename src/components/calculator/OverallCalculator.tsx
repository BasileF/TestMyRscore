import React from 'react';
import { Button, Paper, Grid, Fade, Typography } from '@material-ui/core';
import InputField from '../common/InputField';
import { BaseCalculatorProps, BaseCalculatorState, CalculatorCourse } from '../../interfaces/CalculatorInterfaces';
import Course from './Course';
import CalculatorResult from './CalculatorResult';

interface OverallCalculatorState extends BaseCalculatorState {
  credits: string;
  courses: CalculatorCourse[];
}

export default class OverallCalculator extends React.Component<BaseCalculatorProps, OverallCalculatorState> {
  constructor(props: any) {
    super(props);
    this.state = {
      grade: '',
      average: '',
      deviation: '',
      strength: '75',
      rscore: undefined,
      validResult: false,
      errors: [false, false, false, false, false],
      credits: '',
      courses: [] as CalculatorCourse[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.addCourse = this.addCourse.bind(this);
    this.calculate = this.calculate.bind(this);
    this.validate = this.validate.bind(this);
    this.onBack = this.onBack.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
  }

  handleChange(e: any) {
    this.setState({
      [e.target.name]: e.target.value,
      errors: [false, false, false, false, false]
    } as OverallCalculatorState)
  }

  addCourse() {
    const grade = parseInt(this.state.grade);
    const average = parseInt(this.state.average);
    const deviation = parseInt(this.state.deviation);
    const strength = parseInt(this.state.strength);
    const credits = parseInt(this.state.credits);

    const valid = this.validate(grade, average, deviation, strength, credits);

    if (valid) {
      const addedCourse = {
        grade: grade,
        average: average,
        deviation: deviation,
        strength: strength,
        rscore: Math.round(((((grade - average) / deviation) + (strength - 75) / 14 + 5) * 5) * 1000) / 1000.0,
        credits: credits
      } as CalculatorCourse;

      const curCourses = this.state.courses.slice();
      curCourses.push(addedCourse);

      this.setState({
        courses: curCourses
      });
    }
  }

  calculate() {
    const courses = this.state.courses.slice();
    if (courses.length === 0) {
      return;
    }

    let credits = 0;
    let rscore = 0;

    courses.forEach((course: CalculatorCourse) => {
      credits += course.credits;
      rscore += course.rscore * course.credits;
    });

    rscore /= credits;

    this.setState({
      rscore: rscore,
      validResult: true
    });
  }

  validate(grade: number, average: number, deviation: number, strength: number, credits: number) {
    const curErrors = this.state.errors.slice();
    curErrors[0] = isNaN(grade) || grade < 0 || grade > 100;
    curErrors[1] = isNaN(average) || average < 0 || average > 100;
    curErrors[2] = isNaN(deviation) || deviation < 0 || deviation > 100;
    curErrors[3] = isNaN(strength) || strength < 0 || strength > 100;
    curErrors[4] = isNaN(credits) || credits < 0;

    const valid = !(curErrors[0] || curErrors[1] || curErrors[2] || curErrors[3] || curErrors[4]);

    this.setState({
      errors: curErrors
    })

    return valid;
  }

  removeCourse(course: CalculatorCourse) {
    const courses = this.state.courses.slice();
    const courseIndex = courses.indexOf(course);
    courses.splice(courseIndex, 1);

    this.setState({
      courses: courses
    });
  }

  onBack() {
    this.setState({
      grade: '',
      average: '',
      deviation: '',
      strength: "75",
      rscore: undefined,
      validResult: false,
      errors: [false, false, false, false, false],
      credits: '',
      courses: [] as CalculatorCourse[]
    });
  }

  courses() {
    const courses = this.state.courses;
    return (
      <Grid
        container
        direction='column'
      >
        <Grid item>
          <Paper className='app-text-blue-white'>
            <Grid
              container
              direction='row'
            >
              <Grid item xs={4}>Grade</Grid>
              <Grid item xs={4}>RScore</Grid>
              <Grid item xs={4}>Credits</Grid>
            </Grid>
          </Paper>
        </Grid>
        <div className='calculator-overall-courses'>
          {
            courses.length === 0 ?
              <Typography 
                className='app-text'
                variant='body1'  
              >
                Added courses will appear here!
              </Typography>
              :
              courses.map(course =>
                <Course
                  course={course}
                  removeCourse={this.removeCourse}
                />
              )}
        </div>
      </Grid>
    )
  }

  render() {
    return (
      <Paper
        className='calculator-single-paper'
        elevation={4}
      >
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={4}
        >
          <Grid
            item
            sm={4}
            xs={12}
            className='app-grid-item-no-padding'
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

              <InputField
                label="Credits"
                name="credits"
                tooltip="The amount of credits the course is worth. This can be found on your transcript."
                value={this.state.credits}
                onChange={this.handleChange}
                error={this.state.errors[4]}
              />

              <Grid item>
                <Button
                  variant='contained'
                  onClick={this.addCourse}
                  className='app-button'
                  style={{ marginTop: '8px' }}
                  fullWidth
                >
                  Add Course
                </Button>
              </Grid>

            </div>
          </Grid>
          <Grid
            item
            sm={8}
            xs={12}
            className='app-grid-item-no-padding'
          >
            {
              !this.state.validResult ?
                this.courses()
                :
                <CalculatorResult
                  validResult={this.state.validResult}
                  result={this.state.rscore}
                  onBack={this.onBack}
                />
            }
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

/*
<Button
              variant='contained'
              onClick={this.calculate}
              className='app-button'
              style={{ marginTop: '8px' }}
              fullWidth
            >
              Calculate
            </Button>*/