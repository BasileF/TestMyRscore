export const universities: UniversityInfo[] = [
  {
    name: 'Concordia University',
    image: '/images/universities/concordia.png'
  },
  {
    name: 'McGill University',
    image: '/images/universities/mcgill.png'
  },
  {
    name: 'More to come...',
    image: ''
  }
];

export interface UniversityInfo {
  name: string;
  image: string;
}

export interface UniversityProps {
  university: UniversityInfo;
}