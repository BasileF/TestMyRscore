export interface UniversityProps {
  university: UniversityInfo;
  onClick: (university: UniversityInfo) => void;
};

export interface UniversitiesState {
  eligibilityVisible: boolean;
  university: UniversityInfo | {};
}

export interface EligibilityProps {
  university: UniversityInfo;
  close: () => void;
}

export interface EligibilityState {
  rScore: string;
  prerequisites: Prerequisites;
  programs: Program[];
}

export interface UniversityInfo {
  name: string;
  image: string;
  requirements: Program[];
};

interface Program {
  programName: string;
  degree: string;
  url: string;
  rScore: number;
  preReqs: Prerequisites;
  additionalInfo: string;
}

interface Prerequisites {
  cal1: boolean;
  cal2: boolean;
  linear: boolean;
  mechanics: boolean;
  waves: boolean;
  eAndM: boolean;
  genChem: boolean;
  chemSol: boolean;
  bio1: boolean;
  bio2?: boolean;
  organic?: boolean;
}

const noPreReqs: Prerequisites = {
  cal1: false,
  cal2: false,
  linear: false,
  mechanics: false,
  waves: false,
  eAndM: false,
  genChem: false,
  chemSol: false,
  bio1: false
}

const allPreReqs: Prerequisites = {
  cal1: true,
  cal2: true,
  linear: true,
  mechanics: true,
  waves: true,
  eAndM: true,
  genChem: true,
  chemSol: true,
  bio1: true
}

const engPreReqs: Prerequisites = {
  cal1: true,
  cal2: true,
  linear: true,
  mechanics: true,
  waves: false,
  eAndM: true,
  genChem: true,
  chemSol: false,
  bio1: false
}

const concordiaPrograms: Program[] = [
  {
    programName: 'Accountancy',
    degree: 'BComm',
    url: 'https://www.concordia.ca/academics/undergraduate/accountancy.html',
    rScore: 27.0,
    preReqs: {
      cal1: true,
      cal2: false,
      linear: true,
      mechanics: false,
      waves: false,
      eAndM: false,
      genChem: false,
      chemSol: false,
      bio1: false
    },
    additionalInfo: '75% or higher required in Calculus 1, Linear Algebra and Macro/Micro economics. These can be completed as elective credits at Concordia University.'
  },
  {
    programName: 'Acting for the Theatre',
    degree: 'BFA',
    url: 'https://www.concordia.ca/academics/undergraduate/acting-theatre.html',
    rScore: 0.0,
    preReqs: noPreReqs,
    additionalInfo: ''
  },
  {
    programName: 'Actuarial Mathematics/Finance',
    degree: 'BA',
    url: 'https://www.concordia.ca/academics/undergraduate/actuarial-mathematics-finance.html',
    rScore: 30.0,
    preReqs: {
      cal1: true,
      cal2: true,
      linear: true,
      mechanics: false,
      waves: false,
      eAndM: false,
      genChem: false,
      chemSol: false,
      bio1: false
    },
    additionalInfo: 'Letter of intent required.'
  },
  {
    programName: 'Actuarial Mathematics/Finance',
    degree: 'BSc',
    url: 'https://www.concordia.ca/academics/undergraduate/actuarial-mathematics-finance.html',
    rScore: 30.0,
    preReqs: allPreReqs,
    additionalInfo: 'Letter of intent required.'
  },
  {
    programName: 'Actuarial Mathematics',
    degree: 'BA',
    url: 'https://www.concordia.ca/academics/undergraduate/actuarial-mathematics.html',
    rScore: 28.0,
    preReqs: {
      cal1: true,
      cal2: true,
      linear: true,
      mechanics: false,
      waves: false,
      eAndM: false,
      genChem: false,
      chemSol: false,
      bio1: false
    },
    additionalInfo: ''
  },
  {
    programName: 'Actuarial Mathematics',
    degree: 'BSc',
    url: 'https://www.concordia.ca/academics/undergraduate/actuarial-mathematics.html',
    rScore: 28.0,
    preReqs: allPreReqs,
    additionalInfo: ''
  },
  {
    programName: 'Administration',
    degree: 'BAdmin',
    url: 'https://www.concordia.ca/academics/undergraduate/administration.html',
    rScore: 27.0,
    preReqs: {
      cal1: true,
      cal2: false,
      linear: true,
      mechanics: false,
      waves: false,
      eAndM: false,
      genChem: false,
      chemSol: false,
      bio1: false
    },
    additionalInfo: '75% or higher required in Calculus 1, Linear Algebra and Macro/Micro economics. These can be completed as elective credits at Concordia University.'
  },
  {
    programName: 'Aerospace Engineering',
    degree: 'BEng',
    url: 'https://www.concordia.ca/academics/undergraduate/aerospace-engineering.html',
    rScore: 30.0,
    preReqs: engPreReqs,
    additionalInfo: ''
  },
  {
    programName: 'Anthropology',
    degree: 'BA',
    url: 'https://www.concordia.ca/academics/undergraduate/anthropology.html',
    rScore: 22.0,
    preReqs: noPreReqs,
    additionalInfo: 'Honours RScore: 28.0'
  },
  {
    programName: 'Anthropology and Sociology',
    degree: 'BA',
    url: 'https://www.concordia.ca/academics/undergraduate/anthropology-and-sociology.html',
    rScore: 22.0,
    preReqs: noPreReqs,
    additionalInfo: ''
  },
  {
    programName: 'Art Education, Visual Arts',
    degree: 'BFA',
    url: 'https://www.concordia.ca/academics/undergraduate/art-education.html',
    rScore: 0.0,
    preReqs: noPreReqs,
    additionalInfo: 'Letter of intent and portfolio required. Fall admission only.'
  },
  {
    programName: 'Art History',
    degree: 'BFA',
    url: 'https://www.concordia.ca/academics/undergraduate/art-history.html',
    rScore: 0.0,
    preReqs: noPreReqs,
    additionalInfo: 'Fall admission only.'
  },
  {
    programName: 'Art History and Film Studies',
    degree: 'BFA',
    url: 'https://www.concordia.ca/academics/undergraduate/art-history-filmstudiesbfa.html',
    rScore: 22.0,
    preReqs: noPreReqs,
    additionalInfo: 'Fall admission only.'
  },
  {
    programName: 'Art History and Studio Art',
    degree: 'BFA',
    url: 'https://www.concordia.ca/academics/undergraduate/art-history-studio-art.html',
    rScore: 0.0,
    preReqs: noPreReqs,
    additionalInfo: 'Letter of intent and portfolio required. Fall admission only.'
  },
  {
    programName: 'Athletic Therapy',
    degree: 'BSc',
    url: 'https://www.concordia.ca/academics/undergraduate/athletic-therapy.html',
    rScore: 27.0,
    preReqs: allPreReqs,
    additionalInfo: ''
  },
  {
    programName: 'Behavioural Neuroscience',
    degree: 'BSc',
    url: 'https://www.concordia.ca/academics/undergraduate/behavioural-neuroscience.html',
    rScore: 28.0,
    preReqs: allPreReqs,
    additionalInfo: 'Honours RScore: 31.0'
  },
  {
    programName: 'Biochemistry',
    degree: 'BSc',
    url: 'https://www.concordia.ca/academics/undergraduate/biochemistry.html',
    rScore: 23.0,
    preReqs: allPreReqs,
    additionalInfo: 'Honours RScore: 28.0'
  },
  {
    programName: 'Biology',
    degree: 'BSc',
    url: 'https://www.concordia.ca/academics/undergraduate/biology.html',
    rScore: 26.0,
    preReqs: allPreReqs,
    additionalInfo: 'Honours RScore: 30.0'
  },
  {
    programName: 'Building Engineering',
    degree: 'BEng',
    url: 'https://www.concordia.ca/academics/undergraduate/building-engineering.html',
    rScore: 24.0,
    preReqs: engPreReqs,
    additionalInfo: ''
  },
  {
    programName: 'Business Technology Management',
    degree: 'BComm',
    url: 'https://www.concordia.ca/academics/undergraduate/business-technology-management.html',
    rScore: 27.0,
    preReqs: {
      cal1: true,
      cal2: false,
      linear: true,
      mechanics: false,
      waves: false,
      eAndM: false,
      genChem: false,
      chemSol: false,
      bio1: false
    },
    additionalInfo: '75% or higher required in Calculus 1, Linear Algebra and Macro/Micro economics. These can be completed as elective credits at Concordia University.'
  },
  {
    programName: 'Cell and Molecular Biology',
    degree: 'BSc',
    url: 'https://www.concordia.ca/academics/undergraduate/cell-molecular-biology.html',
    rScore: 26.0,
    preReqs: allPreReqs,
    additionalInfo: 'Honours RScore: 30.0'
  },
  {
    programName: 'Ceramics',
    degree: 'BFA',
    url: 'https://www.concordia.ca/academics/undergraduate/ceramics.html',
    rScore: 0.0,
    preReqs: noPreReqs,
    additionalInfo: 'Letter of intent and portfolio required. Fall admission only.'
  },
  {
    programName: 'Chemistry',
    degree: 'BSc',
    url: 'https://www.concordia.ca/academics/undergraduate/chemistry.html',
    rScore: 23.0,
    preReqs: allPreReqs,
    additionalInfo: 'Honours RScore: 28.0'
  },
  {
    programName: 'Child Studies',
    degree: 'BA',
    url: 'https://www.concordia.ca/academics/undergraduate/child-studies.html',
    rScore: 25.0,
    preReqs: noPreReqs,
    additionalInfo: ''
  },
  {
    programName: 'Civil Engineering',
    degree: 'BEng',
    url: 'https://www.concordia.ca/academics/undergraduate/civil-engineering.html',
    rScore: 24.0,
    preReqs: engPreReqs,
    additionalInfo: ''
  },
  {
    programName: 'Classics',
    degree: 'BA',
    url: 'https://www.concordia.ca/academics/undergraduate/classics.html',
    rScore: 20.0,
    preReqs: noPreReqs,
    additionalInfo: 'Honours RScore: 28.0'
  },
  {
    programName: 'Communication and Cultural Studies',
    degree: 'BA',
    url: 'https://www.concordia.ca/academics/undergraduate/communication-cultural-studies.html',
    rScore: 25.0,
    preReqs: noPreReqs,
    additionalInfo: 'Short essay and two academic assessment forms required. Fall admission only.'
  },
  {
    programName: 'Communication Studies',
    degree: 'BA',
    url: 'https://www.concordia.ca/academics/undergraduate/communication-studies.html',
    rScore: 25.0,
    preReqs: noPreReqs,
    additionalInfo: 'Short essay and two academic assessment forms required. Fall admission only.'
  },
  {
    programName: 'Community, Public Affairs and Policy Studies',
    degree: 'BA',
    url: 'https://www.concordia.ca/academics/undergraduate/community-public-affairs-policy-studies.html',
    rScore: 24.0,
    preReqs: noPreReqs,
    additionalInfo: 'Interview and English and French placement/proficiency test required.'
  },
  {
    programName: 'Computation Arts',
    degree: 'BFA',
    url: 'https://www.concordia.ca/academics/undergraduate/computation-arts.html',
    rScore: 0.0,
    preReqs: noPreReqs,
    additionalInfo: 'Letter of intent and portfolio required. Fall admission only.'
  }
];

const mcGillPrograms: Program[] = [

];

export const universities: UniversityInfo[] = [
  {
    name: 'Concordia University',
    image: '/images/universities/concordia.png',
    requirements: concordiaPrograms
  },
  {
    name: 'McGill University',
    image: '/images/universities/mcgill.png',
    requirements: mcGillPrograms
  },
  {
    name: 'More to come...',
    image: '',
    requirements: []
  }
];
