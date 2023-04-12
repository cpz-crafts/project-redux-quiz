import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';

export const QuizSummary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(quiz.actions.restart());
  };

  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;

  return (
    <div>
      <h1>Quiz Summary</h1>
      <p>You answered {correctAnswers} out of {answers.length} questions correctly.</p>
      <button type="button" onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};
