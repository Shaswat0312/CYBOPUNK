import React, { useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizCont";
import { useNavigate } from "react-router-dom";



const Quiz = () => {
  const {
    questions,
    currentQ,
    handleAnswer,
    score,
    streak,
    showResult,
  } = useContext(QuizContext);

  if (questions.length === 0) return <div className="text-white p-6">Loading Questions...</div>;
  const question = questions[currentQ];


const navigate = useNavigate();
useEffect(() => {
  if (showResult) {
    navigate("/result");
  }
}, [showResult, navigate]);

  return (
    <>
<div className="stars-container fixed top-0 left-0 w-full h-full z-70 pointer-events-none">
    {
    [...Array(25)].map((_, i) => (
      <div key={i} className="falling-star" style={{'--top': `${Math.random()}`,'--delay': `${Math.random()}`, }}/>
    ))
    }
  </div>

    <div className="min-h-screen bg-gradient-to-br from-[#020409] via-[#0a1a2f] to-[#00040d] text-white relative overflow-hidden font-sans">
  
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/wave-lines.svg')] bg-repeat opacity-10 pointer-events-none animate-fade-in-slow" />

      <div className="w-full text-center lg:text-left pt-10 px-6 z-10">
      <h1 className="text-xl sm:text-5xl md:text-6xl font-bold text-center tracking-widest font-mono text-[#7df9ff] animate-cyberPulse">MISSION: CYBER DEFENSE INITIATED </h1>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row justify-center items-center gap-10 px-6 py-10 max-w-7xl mx-auto z-10">

        <div className="relative bg-white/10 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-xl p-8 w-full max-w-2xl min-h-[460px] animate-fade-in-fast flex flex-col justify-between">
          <div className="absolute -inset-1 rounded-xl border-2 border-cyan-400 opacity-20 blur-xl animate-pulse pointer-events-none"></div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-300 tracking-wide">Q{currentQ + 1}. {question.question}</h2>

          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(index === question.answerIndex)} className="w-full py-3 px-5 rounded-md bg-black/40 border border-cyan-500/30 hover:bg-cyan-800 hover:scale-[1.02] transition-all duration-300 text-left font-medium tracking-wide" >{option}</button>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[280px] min-h-[460px] bg-white/10 border border-cyan-400/20 backdrop-blur-xl rounded-2xl shadow-cyan-500/10 shadow-lg animate-fade-in-fast p-6 text-sm text-cyan-100 tracking-wide flex flex-col justify-between">
      
          <div>
            <h3 className="text-base text-cyan-300 mb-2 font-semibold">📊 Progress</h3>
            <div className="w-full bg-cyan-900/30 h-3 rounded-full overflow-hidden mb-1">
              <div className="bg-cyan-400 h-full animate-pulse rounded-full transition-all duration-500" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
            </div>
            <p className="text-xs text-gray-300"> {currentQ + 1} out of {questions.length} Questions</p>
          </div>

       
          <div>
            <h3 className="text-base text-cyan-300 mb-2 font-semibold">🎯 Score</h3>
            <p className="text-2xl text-green-400 font-extrabold">{score} pts</p>
          </div>

       
          <div>
            <h3 className="text-base text-cyan-300 mb-2 font-semibold">🔥 Streak</h3>
            <p className="text-lg font-bold text-yellow-400"> {streak > 0 ? `${streak} Correct in a Row!` : "No Streak"} </p>
          </div>

        
          <div className="text-xs text-gray-400 italic pt-4 border-t border-cyan-900/30">
            Think before you click. ⚡ Trust your instincts.
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Quiz;
