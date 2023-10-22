import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Quiz() {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Mars',
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (!quizStarted) {
      setQuizStarted(true);
    }

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is complete, you can display the score or redirect to another page
      alert(`Quiz complete! Your score: ${score} out of ${questions.length}`);
    }
  };

  return (
    <div>
            {!quizStarted ? (
              <Link to="/quiz">
                <button onClick={() => setQuizStarted(true)}>Start Quiz</button>
              </Link>
            ) : (
              currentQuestion < questions.length ? (
                <>
                  <h2>{questions[currentQuestion].question}</h2>
                  <ul>
                    {questions[currentQuestion].options.map((option, index) => (
                      <li key={index} onClick={() => handleAnswerClick(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                  <p>Question {currentQuestion + 1} of {questions.length}</p>
                  <p>Score: {score}</p>
                </>
              ) : (
                <div>
                  <h2>Quiz Complete</h2>
                  <p>Your final score: {score} out of {questions.length}</p>
                </div>
              )
            )}
          </div>
        );
      }
 export default Quiz;
        