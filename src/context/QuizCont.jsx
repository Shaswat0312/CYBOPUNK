
import {useEffect, useState } from "react";
import {createContext} from "react";

import questionsData from "../Data/Questions.json"; 

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
    } 
    else
     {
      setStreak(0);
    }
    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ((prev) => prev + 1);
      }
       else 
      {
        setShowResult(true);
      }

    }, 200);
  };



  return (
  <QuizContext.Provider
  value={{ questions, currentQ,handleAnswer,score,streak,showResult,setCurrentQ,setScore,setStreak,setShowResult}}>
      {children}
    </QuizContext.Provider>
  );
  };