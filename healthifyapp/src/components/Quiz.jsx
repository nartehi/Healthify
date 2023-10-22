import React, { useState } from 'react';
import "./Quiz.css"

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'What did Sunny trade his "Happyville Coins" for at the village?',
      options: ['Candy', 'Money', 'Cake', 'Pie'],
      correctAnswer: 'Cake',
    },
    {
      question: 'How did Sunny learn about the financial dimension of wellness?',
      options: ['Video Games', 'Sports', 'School', ' By using a piggy bank'],
      correctAnswer: ' By using a piggy bank',
    },
    {
      question: 'Why is it important to save money and make wise choices with your money?',
      options: ['So you can support yourself and help others', 'So you can buy clothes'],
      correctAnswer: 'So you can support yourself and help others',
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };


  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          {score > questions.length / 2 ? (
            <p>Congratulations for scoring {score}/{questions.length}!</p>
          ) : (
            <p>You scored {score}/{questions.length}. Keep practicing!</p>
          )}
          <button onClick={resetQuiz}>Try Again</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex].question}</p>

          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;