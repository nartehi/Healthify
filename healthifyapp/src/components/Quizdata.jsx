import React, { useState } from "react";
import quizData from "../../public/quizData";
import "./Quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const startQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {currentQuestion === null ? (
        <button onClick={startQuiz}>Start Quiz</button>
      ) : showScore ? (
        <div className="score">
          You scored {score} out of {quizData.length} Questions.
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{quizData[currentQuestion].question}</p>
          <ul className="options">
          {quizData[currentQuestion].options.map((option, index) => (
            <li key={index} onClick={() => handleAnswerClick(option.letter)}>
                {option.letter}. {option.text}
                </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;

