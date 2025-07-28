import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
  // const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  // const [answeredState, setAnsweredState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    []
  );

  const handleSkipAnswer = useCallback(() =>
    handleSelectAnswer(null, [handleSelectAnswer])
  );

  if (quizIsComplete) {
    return (
      <Summary userAnswers={userAnswers} />
    )
  }

  return (
    <div id="quiz">
      <Question
      index={activeQuestionIndex}
        key={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
