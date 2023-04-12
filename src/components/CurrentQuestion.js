/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
// components/CurrentQuestion.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import { QuizSummary } from './QuizSummary';

export const CurrentQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const quizOver = useSelector((state) => state.quiz.quizOver);

  const handleAnswer = (answerIndex) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: question.id,
        answerIndex
      })
    );

    if (question.id === question.length) {
      dispatch(quiz.actions.goToNextQuestion());
    }
  };

  const handleNext = () => {
    dispatch(quiz.actions.goToNextQuestion());
  };

  if (quizOver) {
    return <QuizSummary />;
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(index)}>{option}</button>
          </li>
        ))}
      </ul>
      {question.id !== question.length && (
        <button onClick={handleNext}>Next Question</button>
      )}
    </div>
  );
};
