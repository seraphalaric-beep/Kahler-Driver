/**
 * Scoring logic - exact from questionnaire: Y=1, S=½, N=0
 */

import type { AnswerOption, DriverType } from './questionnaire-data';
import { ANSWER_SCORES, QUESTION_TO_DRIVER } from './questionnaire-data';

export function calculateDriverScores(
  answers: Record<number, AnswerOption>
): Record<DriverType, number> {
  const scores: Record<DriverType, number> = {
    'Be Perfect': 0,
    'Be Strong': 0,
    'Hurry Up': 0,
    'Please Others': 0,
    'Try Hard': 0,
  };

  for (const [qStr, answer] of Object.entries(answers)) {
    const questionNum = parseInt(qStr, 10);
    const driver = QUESTION_TO_DRIVER[questionNum as keyof typeof QUESTION_TO_DRIVER];
    const score = ANSWER_SCORES[answer];
    if (driver && score !== undefined) {
      scores[driver] += score;
    }
  }

  return scores;
}

export function getPrimaryDriver(scores: Record<DriverType, number>): DriverType {
  let maxScore = -1;
  let primary: DriverType = 'Be Perfect';

  for (const [driver, score] of Object.entries(scores) as [DriverType, number][]) {
    if (score > maxScore) {
      maxScore = score;
      primary = driver;
    }
  }

  return primary;
}
