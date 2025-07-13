import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = ({ setUsername }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setUsername(input);
      navigate("/wait");;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020409] via-[#0a1a2f] to-[#00040d] text-white relative overflow-hidden font-sans">   
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full animate-pulse-slow opacity-5 bg-[radial-gradient(#00ffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-cyan-500/20 rounded-2xl shadow-2xl p-10 md:p-16 w-[95%] max-w-2xl animate-fade-in-fast">
<div className="absolute -inset-1 rounded-2xl border-4 border-cyan-400 blur-xl opacity-20 animate-pulse pointer-events-none"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 tracking-widest neon-text-glow">
          ⚔️ CYBOPUNK CHALLENGE ⚔️
        </h1>
        <p className="text-center text-lg mb-8 text-gray-200 italic tracking-wide">
          Enter the arena. Test your cyber instincts.
        </p>

        <form onSubmit={handleStart} className="flex flex-col items-center gap-6">
          <input
            type="text"
            placeholder="TYPE YOUR ALIAS..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full px-6 py-4 rounded-md bg-black/50 text-cyan-200 font-mono border border-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-cyan-400 placeholder:tracking-widest text-lg"
          />

          <button
            type="submit"
            className="w-full py-4 text-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-800 rounded-lg tracking-widest shadow-md hover:shadow-cyan-400/40 hover:scale-105 transition-all duration-300"
          >
            INITIATE QUIZ PROTOCOL
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
