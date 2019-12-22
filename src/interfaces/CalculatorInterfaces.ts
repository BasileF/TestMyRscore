export interface BaseCalculatorProps {

}

export interface BaseCalculatorState {
  grade: string;
  average: string;
  deviation: string;
  strength: string;
  rscore: number | undefined;
  validResult: boolean;
  errors: boolean[];
}

export interface CalculatorResultProps {
  validResult: boolean;
  result: any;
  onBack: () => void;
}

export interface CalculatorCourseProps {
  course: CalculatorCourse;
  removeCourse: (course: CalculatorCourse) => void;
}

export interface CalculatorCourse {
  grade: number;
  average: number;
  deviation: number;
  strength: number;
  rscore: number;
  credits: number;
}