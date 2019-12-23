import React from 'react';
import { CalculatorCourseProps } from '../../../interfaces/CalculatorInterfaces';
import { Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Clear';

export default function Course(props: CalculatorCourseProps) {
  const course = props.course;
  return (
    <Grid
      item
      className='calculator-overall-course'
    >
      <Grid
        container
        direction='row'
      >
        <Grid item xs={4}>{course.grade}</Grid>
        <Grid item xs={4}>{course.rscore}</Grid>
        <Grid 
          item
          xs={4}
          style={{paddingLeft: '29px'}}
        >
          {course.credits}
          <DeleteIcon
            onClick={() => props.removeCourse(course)}
            className='calculator-overall-course-remove' 
          />
        </Grid>
      </Grid>
    </Grid>
  )
}