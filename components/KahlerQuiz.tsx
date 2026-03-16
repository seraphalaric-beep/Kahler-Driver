'use client';

import { useState } from 'react';
import { QUESTIONS } from '@/lib/questionnaire-data';
import type { AnswerOption } from '@/lib/questionnaire-data';
import { calculateDriverScores, getPrimaryDriver } from '@/lib/scoring';
import { DRIVER_OVERVIEWS } from '@/lib/driver-overview';
import type { DriverType } from '@/lib/questionnaire-data';

const ANSWER_LABELS: { value: AnswerOption; label: string }[] = [
  { value: 'Y', label: 'Yes' },
  { value: 'S', label: 'To some extent' },
  { value: 'N', label: 'No' },
];

export default function KahlerQuiz() {
  const [answers, setAnswers] = useState<Record<number, AnswerOption>>({});
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === totalQuestions;

  const handleAnswer = (questionNum: number, answer: AnswerOption) => {
    setAnswers((prev) => ({ ...prev, [questionNum]: answer }));
    if (questionNum < totalQuestions) {
      setCurrentQuestion(questionNum + 1);
    }
  };

  const handleSubmit = () => {
    if (isComplete) {
      setShowResults(true);
    }
  };

  if (showResults && isComplete) {
    const scores = calculateDriverScores(answers);
    const primaryDriver = getPrimaryDriver(scores);
    const overview = DRIVER_OVERVIEWS[primaryDriver];

    return (
      <div className="results">
        <h2>Your Results</h2>
        <p className="intro">
          The driver statement is a summary of learned behaviour. We all have learned behaviour and it influences our actions to a greater or lesser extent, depending upon how powerfully we were given those messages, or how we reacted to or against them.
        </p>

        <div className="scores-summary">
          <h3>Your Scores</h3>
          <ul className="score-list">
            {(Object.entries(scores) as [DriverType, number][]).map(([driver, score]) => (
              <li key={driver} className={driver === primaryDriver ? 'primary' : ''}>
                <span className="driver-name">{driver}</span>
                <span className="driver-score">{score}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="primary-driver">
          <h3>Your Primary Driver: {primaryDriver}</h3>
          <p className="description">{overview.description}</p>
          <div className="section">
            <h4>Individuals with this driver preference are identifiable by:</h4>
            <ul>
              {overview.identifiableBy.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="section">
            <h4>{overview.supportSectionHeading}</h4>
            <ul>
              {overview.supportTips.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          className="retake"
          onClick={() => {
            setAnswers({});
            setCurrentQuestion(1);
            setShowResults(false);
          }}
        >
          Retake the quiz
        </button>
      </div>
    );
  }

  const question = QUESTIONS[currentQuestion - 1];
  const currentAnswer = answers[currentQuestion];

  return (
    <div className="quiz">
      <div className="progress">
        Question {currentQuestion} of {totalQuestions}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="question-card">
        <p className="question-number">Question {currentQuestion}</p>
        <p className="question-text">{question}</p>

        <p className="answer-instruction">
          There are no right or wrong answers, no better or worse ways to behave. Please be totally honest with yourself. Do not sit on the fence – the clearer you are with the distinctions, the more reliable will be the result for you.
        </p>

        <div className="answer-options">
          {ANSWER_LABELS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`answer-btn ${currentAnswer === value ? 'selected' : ''}`}
              onClick={() => handleAnswer(currentQuestion, value)}
            >
              {label} ({value})
            </button>
          ))}
        </div>
      </div>

      <div className="nav-buttons">
        {currentQuestion > 1 && (
          <button
            type="button"
            className="nav-btn prev"
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            Previous
          </button>
        )}
        <div className="nav-spacer" />
        {currentQuestion < totalQuestions ? (
          <button
            type="button"
            className="nav-btn next"
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          >
            Next
          </button>
        ) : (
          <button
            type="button"
            className="nav-btn submit"
            onClick={handleSubmit}
            disabled={!isComplete}
          >
            See Results
          </button>
        )}
      </div>
    </div>
  );
}
