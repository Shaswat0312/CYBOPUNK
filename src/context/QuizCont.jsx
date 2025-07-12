
import {useEffect, useState } from "react";
import {createContext} from "react";

import questionsData from "../Data/questions.json"; 

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showResult, setShowResult] = useState(false);



  useEffect(() => {const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 15);
    setQuestions(selected);
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 10);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowResult(true);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQ,
        score,
        streak,
        showResult,
        handleAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
