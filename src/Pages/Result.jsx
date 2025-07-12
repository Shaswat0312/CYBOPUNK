import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/QuizCont';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const { score, streak, setCurrentQ, setScore, setStreak, setShowResult } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleRestart = () => {
  setCurrentQ(0);
  setScore(0);
  setStreak(0);
  setShowResult(false);
  navigate("/quiz");
    resetQuiz();
};

  const getMessage = () => {
    if (score >= 130) return "🚀 Cyber Guardian! You nailed it!";
    if (score >= 100) return "⚡ Well Done! You're almost elite!";
    if (score >= 70) return "🔐 Good Job! Keep Practicing!";
    if (score >= 40) return "🛡️ Decent Start! Strengthen your defenses!";
    return "💻 Time to train harder, cyber rookie!";
  };
   return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020409] via-[#0a1a2f] to-[#00040d] text-white relative overflow-hidden">

  
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/wave-lines.svg')] bg-repeat opacity-10 pointer-events-none" />
      <div className="z-10 p-10 max-w-xl w-full
  bg-white/10
  backdrop-blur-2xl
  border border-cyan-400/30
  rounded-2xl
  shadow-[0_0_30px_#00ffff44,0_0_60px_#00ffff22]
  ring-1 ring-cyan-300/30
  transition-all duration-500
  space-y-6 text-center
  animate-fade-in-fast
  hover:shadow-[0_0_50px_#00ffffaa,0_0_90px_#00ffff55]"
>

        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-500">
          🎉 Mission Complete
        </h1>

    
        <p className="text-xl">
          Your Score: <span className="text-green-400 font-bold">{score} pts</span>
        </p>
        <p className="text-lg text-yellow-400">🔥 Final Streak: {streak}</p>

        <p className="text-xl font-bold px-6 py-4 rounded-lg border border-cyan-400/40 bg-white/10 backdrop-blur-lg text-white shadow-[0_0_25px_#0ff3,0_0_60px_#0ff3] animate-bounce-slow">
          {getMessage()}
        </p>

        <button
          onClick={handleRestart}
          className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-600 hover:to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
        >
          🔄 Restart Challenge
        </button>
      </div>
    </div>
  );
};


export default Result
