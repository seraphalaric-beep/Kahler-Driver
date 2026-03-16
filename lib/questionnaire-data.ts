/**
 * Kahler Driver Questionnaire - exact data from the official questionnaire.
 * Do not reinterpret. Use only what is provided in the source documents.
 */

export type AnswerOption = 'Y' | 'N' | 'S';

export const ANSWER_SCORES: Record<AnswerOption, number> = {
  Y: 1,
  S: 0.5,
  N: 0,
} as const;

export const QUESTIONS: readonly string[] = [
  'Do you hide or control your feelings?',
  'Are you reluctant to ask for help?',
  'Do you set yourself high standards and then criticize yourself for failing to meet them?',
  'Do you do things (especially for others) that you don\'t really want to?',
  'Do you have a tendency to do a lot of things simultaneously?',
  'Do you hate \'giving up\' or \'giving in\', always hoping that \'this time it will work\'?',
  'Is it important for you to be RIGHT?',
  'Is it important for you to be LIKED?',
  'Do you have a tendency to start things and not finish them?',
  'Do you set unrealistic time limits?',
  'Are you fairly easily persuaded?',
  'Do you dislike being different?',
  'Do you have a tendency to put yourself (or find yourself) in the position of being depended upon?',
  'Do you feel discomforted (e.g. annoyed, irritated) by small messes or discrepancies such as a spot on a garment or the wallpaper an ornament or a tool out of place, a disorderly presentation of work?',
  'Would you describe yourself as \'quick\' & find yourself getting impatient with others?',
  'Do you hate to be interrupted?',
  'Do you tend to compare yourself (or your performance) with others and feel inferior or superior accordingly?',
  'Do you find yourself going round in circles with a problem feeling stuck but unable to let go of it?',
  'Do you have a tendency not to realise how tired, or hungry or ill you feel, but instead \'keep going\'?',
  'Do you tend to talk at the same time as others, or finish their sentences for them?',
  'Do you like to explain things in detail and precisely?',
  'Do you like to \'get on with the job\' rather than talk about it?',
  'Do you prefer to do things on your own?',
  'Do you dislike conflict?',
  'Do you have a tendency to be the rebel or the odd one out in a group?',
];

/**
 * Column mapping from questionnaire: Question number (1-indexed) -> Driver
 * Column ONE (Be Perfect): Q3, Q7, Q14, Q16, Q21
 * Column TWO (Please Others): Q4, Q8, Q11, Q12, Q24
 * Column THREE (Hurry Up): Q5, Q10, Q15, Q20, Q22
 * Column FOUR (Be Strong): Q1, Q2, Q13, Q19, Q23
 * Column FIVE (Try Hard): Q6, Q9, Q17, Q18, Q25
 */
export const QUESTION_TO_DRIVER: Record<number, DriverType> = {
  1: 'Be Strong',
  2: 'Be Strong',
  3: 'Be Perfect',
  4: 'Please Others',
  5: 'Hurry Up',
  6: 'Try Hard',
  7: 'Be Perfect',
  8: 'Please Others',
  9: 'Try Hard',
  10: 'Hurry Up',
  11: 'Please Others',
  12: 'Please Others',
  13: 'Be Strong',
  14: 'Be Perfect',
  15: 'Hurry Up',
  16: 'Be Perfect',
  17: 'Try Hard',
  18: 'Try Hard',
  19: 'Be Strong',
  20: 'Hurry Up',
  21: 'Be Perfect',
  22: 'Hurry Up',
  23: 'Be Strong',
  24: 'Please Others',
  25: 'Try Hard',
} as const;

export type DriverType = 'Be Perfect' | 'Be Strong' | 'Hurry Up' | 'Please Others' | 'Try Hard';

export const DRIVER_ORDER: DriverType[] = [
  'Be Perfect',
  'Please Others',
  'Hurry Up',
  'Be Strong',
  'Try Hard',
];
