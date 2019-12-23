import React, { Fragment } from 'react';
import { universities } from '../../interfaces/UniversityInterfaces';
import University from './University';

export default function Universities() {
  return (
    <Fragment>
      {
        universities.map((uni, index) => 
          <University 
            university={uni}
            key={index}
          />
        )
      }
    </Fragment>
  )
}