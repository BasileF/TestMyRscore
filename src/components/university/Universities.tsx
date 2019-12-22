import React, { Fragment } from 'react';
import { universities } from '../../interfaces/UniversityInterfaces';
import University from './University';

export default function Universities() {
  return (
    <Fragment>
      {
        universities.map(uni => 
          <University 
            university={uni}
          />
        )
      }
    </Fragment>
  )
}