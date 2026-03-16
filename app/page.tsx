"use client";

import { useMemo, useState } from "react";

type ResponseValue = "Y" | "S" | "N";

type Question = {
  number: number;
  text: string;
};

const QUESTIONS: Question[] = [
  { number: 1, text: "Do you hide or control your feelings?" },
  { number: 2, text: "Are you reluctant to ask for help?" },
  {
    number: 3,
    text: "Do you set yourself high standards and then criticize yourself for failing to meet them?"
  },
  {
    number: 4,
    text: "Do you do things (especially for others) that you don't really want to?"
  },
  {
    number: 5,
    text: "Do you have a tendency to do a lot of things simultaneously?"
  },
  {
    number: 6,
    text: "Do you hate 'giving up' or 'giving in', always hoping that 'this time it will work'?"
  },
  { number: 7, text: "Is it important for you to be RIGHT?" },
  { number: 8, text: "Is it important for you to be LIKED?" },
  {
    number: 9,
    text: "Do you have a tendency to start things and not finish them?"
  },
  { number: 10, text: "Do you set unrealistic time limits?" },
  { number: 11, text: "Are you fairly easily persuaded?" },
  { number: 12, text: "Do you dislike being different?" },
  {
    number: 13,
    text: "Do you have a tendency to put yourself (or find yourself) in the position of being depended upon?"
  },
  {
    number: 14,
    text: "Do you feel discomforted (e.g. annoyed, irritated) by small messes or discrepancies such as a spot on a garment or the wallpaper an ornament or a tool out of place, a disorderly presentation of work?"
  },
  {
    number: 15,
    text: "Would you describe yourself as 'quick' & find yourself getting impatient with others?"
  },
  { number: 16, text: "Do you hate to be interrupted?" },
  {
    number: 17,
    text: "Do you tend to compare yourself (or your performance) with others and feel inferior or superior accordingly?"
  },
  {
    number: 18,
    text: "Do you find yourself going round in circles with a problem feeling stuck but unable to let go of it?"
  },
  {
    number: 19,
    text: "Do you have a tendency not to realise how tired, or hungry or ill you feel, but instead 'keep going'?"
  },
  {
    number: 20,
    text: "Do you tend to talk at the same time as others, or finish their sentences for them?"
  },
  { number: 21, text: "Do you like to explain things in detail and precisely?" },
  {
    number: 22,
    text: "Do you like to 'get on with the job' rather than talk about it?"
  },
  { number: 23, text: "Do you prefer to do things on your own?" },
  { number: 24, text: "Do you dislike conflict?" },
  {
    number: 25,
    text: "Do you have a tendency to be the rebel or the odd one out in a group?"
  }
];

const COLUMN_MAP: Record<string, number[]> = {
  ONE: [3, 7, 14, 16, 21],
  TWO: [4, 8, 11, 12, 24],
  THREE: [5, 10, 15, 20, 22],
  FOUR: [1, 2, 13, 19, 23],
  FIVE: [6, 9, 17, 18, 25]
};

const DRIVERS: Record<string, string> = {
  ONE: "Be perfect",
  TWO: "Please (others)",
  THREE: "Hurry up",
  FOUR: "Be strong",
  FIVE: "Try Hard"
};

const SCORES: Record<ResponseValue, number> = {
  Y: 1,
  S: 0.5,
  N: 0
};

export default function Page() {
  const [responses, setResponses] = useState<Record<number, ResponseValue | undefined>>({});
  const [showResults, setShowResults] = useState(false);

  const allAnswered = QUESTIONS.every((question) => responses[question.number]);

  const totals = useMemo(() => {
    const result: Record<string, number> = {
      ONE: 0,
      TWO: 0,
      THREE: 0,
      FOUR: 0,
      FIVE: 0
    };

    for (const [column, questions] of Object.entries(COLUMN_MAP)) {
      result[column] = questions.reduce((sum, questionNumber) => {
        const answer = responses[questionNumber];
        return sum + (answer ? SCORES[answer] : 0);
      }, 0);
    }

    return result;
  }, [responses]);

  return (
    <main>
      <h1>Kahler Driver Questionnaire</h1>
      <div className="card">
        <div className="instructions">
          <p>
            Drivers are unconscious internal pressures that makes us do things certain ways, e.g. quickly or with emotion, and they tend to satisfy inner needs rather than actual events.
          </p>
          <p>
            Answer the following questions by indicating "Yes" (Y) "No" (N) or "to some extent" (S) next to the question number.
          </p>
          <p>
            There are no right or wrong answers, no better or worse ways to behave. Understanding our behaviour, and sometimes that of others, helps us to increase communication and reduce friction. Please be totally honest with yourself as that will give you the best information about yourself. Do not 'sit on the fence' i.e. have lots of S's and very little N's – the clearer you are with the distinctions, the more reliable will be the result for you.
          </p>
        </div>

        {QUESTIONS.map((question) => (
          <div className="question" key={question.number}>
            <div className="question-header">
              <strong>{question.number}.</strong>
              <span>{question.text}</span>
            </div>
            <div className="responses">
              {[
                { label: "Yes (Y)", value: "Y" },
                { label: "To some extent (S)", value: "S" },
                { label: "No (N)", value: "N" }
              ].map((option) => (
                <label key={option.value}>
                  <input
                    type="radio"
                    name={`question-${question.number}`}
                    value={option.value}
                    checked={responses[question.number] === option.value}
                    onChange={() => {
                      setResponses((prev) => ({
                        ...prev,
                        [question.number]: option.value as ResponseValue
                      }));
                      setShowResults(false);
                    }}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={() => setShowResults(true)}
          disabled={!allAnswered}
        >
          Calculate scores
        </button>

        {showResults && (
          <div className="results">
            <p>
              <strong>Scoring:</strong> Y = 1, S = ½, N = 0
            </p>
            <table>
              <thead>
                <tr>
                  <th>Column</th>
                  <th>Driver statement</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(COLUMN_MAP).map((column) => (
                  <tr key={column}>
                    <td>{column}</td>
                    <td>{DRIVERS[column]}</td>
                    <td>{totals[column]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
